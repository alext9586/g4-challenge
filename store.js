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
    return knex('etl_table_1').insert(tableData)
  },
  uploadEtl2({data}) {    
    let lines = data.split(/\r?\n/).filter(i => i)
    let tableData = lines.map(line => {
      let words = line.split(',')
      let tempDateTime = new Date(words[0])

      return {
        created_at: tempDateTime.toISOString(),
        ip: words[1],
        latitude: parseFloat(words[2]),
        longitude: parseFloat(words[3]),
        first_name: words[4],
        last_name: words[5],
        email: words[6]
      }
    })
    return knex('etl_table_2').insert(tableData)
  },
  uploadCustomersTable({data}) {    
    let lines = data.split(/\r?\n/).filter(i => i)
    let tableData = lines.map(line => {
      let words = line.split(',')
      let tempDateTime = new Date(words[6])

      return {
        email: words[0],
        first_name: words[1],
        last_name: words[2],
        ip: words[3],
        latitude: parseFloat(words[4]),
        longitude: parseFloat(words[5]),
        created_at: tempDateTime.toISOString()
      }
    })
    return knex('customers').insert(tableData)
  }
}
