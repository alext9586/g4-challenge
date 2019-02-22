const knex = require('knex')(require('./knexfile'))

module.exports = {
  uploadEtl1({data}) {    
    let lines = data.split(/\r?\n/).filter(i => i)
    let tableData = lines.map(line => {
      let words = line.split(',')
      let tempDateTime = new Date(words[0])

      return {
        created_at: tempDateTime.toISOString(),
        first_name: words[1],
        last_name: words[2],
        email: words[3],
        latitude: parseFloat(words[4]),
        longitude: parseFloat(words[5]),
        ip: words[6]
      }
    })
    console.log(tableData)
    return knex('etl_table_1').insert(tableData)
  }
}
