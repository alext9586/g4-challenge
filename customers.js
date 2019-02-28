const express = require('express')
const store = require('./store')
const router = express.Router()

router.get('/all', (req, res, next) => {
  store.getAllCustomers().then(records => res.send(records))
})

router.post('/addCustomer', (req, res, next) => {
  store.addCustomer({data: req.body}).then(res.sendStatus(200))
})

router.put('/updateCustomer', (req, res, next) => {
  store.updateCustomer({data: req.body}).then(res.sendStatus(200))
})

router.delete('/deleteCustomer', (req, res, next) => {
  store.deleteCustomer({customerId: req.body.customerId}).then(res.sendStatus(200))
})

router.post('/search', (req, res, next) => {
  store.searchCustomer({data: req.body}).then(records => res.send(records))
})

module.exports = router