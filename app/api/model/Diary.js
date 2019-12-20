const Submission = require('./Submission')

module.exports = class Diary {

    constructor(entry) {
        const submission = new Submission(entry.payload.submission)
        this.submission_id = submission.submission_id
        this.subject = submission.subject
        this.answers = submission.answers
        
        this.created_at = new Date(entry.completed_at).toLocaleDateString()
        this.created_by = 'anonymous'
    }

    filterTopic(topic) {
        this.answers = this.answers.filter(answer => {
            return answer.heading.replace(/\s/g, '-').replace(',', '').toLowerCase() === topic
        })
    }

    filterSubTopic(subTopic) {
        this.answers = this.answers.filter(answer => {
            //console.log('question', answer.questions)
            return answer.questions[0].answer.replace(/\s/g, '-').replace(',', '').toLowerCase() === subTopic
        })
    }
}