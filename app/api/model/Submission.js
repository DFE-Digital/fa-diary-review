module.exports = class Submission {

    constructor(submission) {
        this.submission_id = submission.submission_id
        this.subject = submission.sections[1].questions[1].answer
        this.answers = this.mergeQuestionsWithAnswers(submission.sections.slice(2))
    }

    mergeQuestionsWithAnswers(qandas) {
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
}