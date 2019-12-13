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
}