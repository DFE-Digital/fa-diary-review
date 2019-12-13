const express = require('express')
const router = express.Router()

const api = require('./api')

router.get('/logs', function (req, res) {
    api.getLogs().then(data => {
      res.render('logs', { 'logs': data })
    })
})

module.exports = router
