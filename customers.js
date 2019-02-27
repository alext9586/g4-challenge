const express = require('express')
const store = require('./store')
const router = express.Router()

router.get('/all', (req, res, next) => {
    store.getAllCustomers().then((records) => res.send(records))
})

router.post('/addCustomer', (req, res, next) => {
    store.addCustomer({data: req.body}).then(res.sendStatus(200))
})

module.exports = router