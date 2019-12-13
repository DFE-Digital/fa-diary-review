const dataUtil = require('./data.js')
const DiaryEntry = require('./model/Diary')
const ABOUT = {
    parent: 'auto_value__2',
    child: 'auto_value__1'
}

const extract = (method, file, about) => {
    return new Promise(resolve => {
        method(file)
            .then(data => {
                resolve(data
                    .filter(entry => entry.payload.submission.sections[1].questions[0].answer === about)
                    .map(entry => new DiaryEntry(entry))
                )
            })
    })
}

module.exports.getLogs = () => extract(dataUtil.loadFromUrl, 'http://dfe-fb-submitter.herokuapp.com/submissions', ABOUT.child)
