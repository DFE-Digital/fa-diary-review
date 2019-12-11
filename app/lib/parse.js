const dataUtil = require('./data.js')
const ABOUT = {
    parent: 'auto_value__2',
    child: 'auto_value__1'
}

const parse = (method, file, about) => {
    return new Promise(resolve => {
        method(file)
            .then(data => {
                resolve(data
                    .filter(record => record.payload.submission.sections[1].questions[0].answer === about)
                    .map(record => extract(record))
                )
            })
    })

}

const mergeQuestionsWithAnswers = qandas => {
    let merged = []
    let qanda = {}
    qandas.forEach((b, index) => {
        if (index % 2 === 0) {
            qanda.heading = b.heading
        } else {
            qanda.questions = b.questions
            merged.push(qanda)
            qanda = {}
        }
    })

    return merged
}

const extract = record => {
    const parsedData = {
        timestamp: new Date(record.completed_at).toLocaleDateString(),
        submission_id: record.payload.submission.submission_id,
        subject: record.payload.submission.sections[1].questions[1].answer,
        answers: mergeQuestionsWithAnswers(record.payload.submission.sections.slice(2)),
    }
    return parsedData
}

module.exports.getLogs = () => parse(dataUtil.loadFromUrl, 'http://dfe-fb-submitter.herokuapp.com/submissions', ABOUT.child)
