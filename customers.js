const express = require('express')
const store = require('./store')
const router = express.Router()

router.get('/test', (req, res, next) => {
    res.send("hello from test")
})

router.get('/all', (req, res, next) => {
    store.getAllCustomers().then((records) => res.send(records))
})

module.exports = router