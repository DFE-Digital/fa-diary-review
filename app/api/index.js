const dataUtil = require('./data.js')
const DiaryEntry = require('./model/Diary')
const ABOUT = {
    parent: 'auto_value__2',
    child: 'auto_value__1'
}
const endpoint = 'http://dfe-fb-submitter.herokuapp.com/submissions'

const getLogs = (method, file, about) => {
    return new Promise(resolve => {
        method(file)
            .then(data => {
                resolve(data
                    .filter(entry => entry.payload.submission.sections[1].questions[0].answer === about)
                    .map(entry => new DiaryEntry(entry))
                )
            }).catch(e => console.log('error', e))
    })
}

const getChildren = (method, file, about) => {
    return new Promise(resolve => {
        method(file)
            .then(data => {
                resolve(data
                    .filter(entry => entry.payload.submission.sections[1].questions[0].answer === about)
                    .map(entry => entry.payload.submission.sections[1].questions[1].human_value.toLowerCase())
                    .filter((child, index, children) => children.indexOf(child) === index)
                )
            })
    })
}

module.exports.getLogs = () => getLogs(dataUtil.loadFromUrl, endpoint, ABOUT.child)

module.exports.getChildren = () => getChildren(dataUtil.loadFromUrl, endpoint, ABOUT.child)
