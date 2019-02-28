const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const store = require('./store')

const customersApi = require('./customers')
const customersJson = require('./js/customers.json')

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/uploadEtl1', (req, res) => {
  store
		.uploadEtl1({data: req.body.data})
		.then(() => res.sendStatus(200))
})

app.post('/uploadEtl2', (req, res) => {
  store
		.uploadEtl2({data: req.body.data})
		.then(() => res.sendStatus(200))
})

app.post('/uploadCustomersTable', (req, res) => {
  store
		.uploadCustomersTable({data: req.body.data})
		.then(() => res.sendStatus(200))
})

app.use('/customers', customersApi)

app.use('/customersJson', (req, res) => {
	res.send(customersJson)
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})