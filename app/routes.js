const express = require('express')
const router = express.Router()

const api = require('./api')

router.get('/logs', function (req, res) {
    api.getLogs().then(data => {
      res.render('logs', { 'logs': data })
    })
})

router.get('/select', function (req, res) {
  api.getChildren().then(data => {
    res.render('diary/select',  { 'children': data })
  })
})

router.get('/review', function (req, res) {
  const selected = {
    topic: req.query.topic || 'home-life'
  }

  const subTopic = require('./data/sub-topics')[selected.topic]
  const subTopicOptions = require('./data/sub-topics')[selected.topic].options || []

  if (subTopicOptions.length) {
    selected.subOption = subTopicOptions[0].id
  }

  const radioGroups = require('./data/radios')
  const radios = subTopic.radios.map(option => radioGroups[option])

  res.render('diary/review', {
    topic: require('./data/topics'),
    subTopicOptions,
    radios,
    selected
  })
  // api.getChildren().then(data => {
  //   console.log(data)
  //   res.render('child/select',  { 'children': data })
  // })
})

module.exports = router
