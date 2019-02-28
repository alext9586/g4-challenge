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
  },
  getAllCustomers() {
    return knex('customers').select()
  },
  addCustomer({data}) {
    const currentTime = new Date()
    let formattedData = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      ip: data.ip,
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      created_at: currentTime.toISOString()
    }
    return knex('customers').insert(formattedData)
  },
  updateCustomer({data}) {
    const currentTime = new Date()

    return knex('customers').where('id', data.id).update(
      {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        ip: data.ip,
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        updated_at: currentTime.toISOString()
      }
    )
  },
  deleteCustomer({customerId}) {
    return knex('customers').where('id', customerId).del()
  },
  searchCustomer({data}) {
    const formattedData = {}

    if(data.email) {
      formattedData.email = data.email
    }

    if(data.first_name) {
      formattedData.first_name = data.first_name
    }

    if(data.last_name) {
      formattedData.last_name = data.last_name
    }

    if(data.ip) {
      formattedData.ip = data.ip
    }

    if(data.latitude) {
      formattedData.latitude = parseFloat(data.latitude)
    }

    if(data.longitude) {
      formattedData.longitude = parseFloat(data.longitude)
    }

    return knex('customers').where(formattedData).select().debug()
  }
}
