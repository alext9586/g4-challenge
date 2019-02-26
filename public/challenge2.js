const CustomersTableUpload = document.querySelector('.ws_customer_table')

CustomersTableUpload.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = CustomersTableUpload.querySelector('.ws_customer_table_input').value
    post('/uploadCustomersTable', { data })
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