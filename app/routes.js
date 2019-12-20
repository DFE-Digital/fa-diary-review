const express = require('express')
const router = express.Router()

const api = require('./api')
const Child = require('./api/model/Child')

router.get('/logs', (req, res) => {
  api.getLogsForChild(req.query.childName).then(data => {
    res.render('diary/logs', {
      'logs': api.filterLogs(data, {
        topic: req.query.topic,
        subTopic: req.query.subTopic
      })
    })
  })
})

router.get('/select', (req, res) => {
  api.getChildren().then(data => {
    res.render('diary/select', { 'children': data })
  })
})

router.get('/review', (req, res) => {
  const selected = {
    topic: req.query.topic || 'home-life'
  }

  const subTopic = require('./data/sub-topics')[selected.topic] || []

  if (subTopic.options && subTopic.options.findIndex(option => option.id === req.query.subTopic) === -1) {
    selected.subTopic = subTopic.options[0].id
  } else {
    selected.subTopic = req.query.subTopic
  }

  const radioGroups = require('./data/radios')
  const radios = subTopic.radios.map(option => radioGroups[option])

  res.render('diary/review', {
    topic: require('./data/topics'),
    subTopic,
    radios,
    selected
  })
})

router.get('/api/logs/breakdown', (req, res) => {
  api.getLogsForChild(req.query.childName).then(data => {
    const child = new Child(data)
    res.json(child.logsThemeCounts())
  })
})

module.exports = router
