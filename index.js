const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')

const app = express()
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

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})