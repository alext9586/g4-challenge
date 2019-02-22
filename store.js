const knex = require('knex')(require('./knexfile'))

module.exports = {
  uploadEtl1({data}) {
    console.log("data", data)
  }
}
