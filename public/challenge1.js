const EtlTable1Upload = document.querySelector('.etl_table_1')
const EtlTable2Upload = document.querySelector('.etl_table_2')
const CustomersTableUpload = document.querySelector('.ws_customer_table')

EtlTable1Upload.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = EtlTable1Upload.querySelector('.etl_1_input').value
    post('/uploadEtl1', { data })
})

EtlTable2Upload.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = EtlTable2Upload.querySelector('.etl_2_input').value
    post('/uploadEtl2', { data })
})

function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }