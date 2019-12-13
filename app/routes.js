const express = require('express')
const router = express.Router()

const api = require('./api')

router.get('/logs', function (req, res) {
    api.getLogs().then(data => {
      res.render('logs', { 'logs': data })
    })
})

router.get('/diary/home', function (req, res) {
  api.getChildren().then(data => {
    res.render('diary/home',  { 'children': data })
  })
})


router.get('/diary/review', function (req, res) {
  const selected = {
    topic: req.query.topic || 'home-life'
  }
  
  const sub = require('./data/sub-topics')[selected.topic]
  
  selected.sub = sub[0].id

  const optionKeys = require('./data/options')
  const options = sub.find(s => s.id === selected.sub).options.map(option => optionKeys[option])

  res.render('diary/review', {
    topic: require('./data/topics'),
    sub,
    options,
    selected
  })
  // api.getChildren().then(data => {
  //   console.log(data)
  //   res.render('child/select',  { 'children': data })
  // })
})

module.exports = router
