const express = require('express')
const router = express.Router()

const data = require('./lib/parse')

router.get('/logs', function (req, res) {
    data.getLogs().then(data => {
      res.render('logs', { 'logs': data })
    })
})

module.exports = router
