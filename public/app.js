const EtlTableUpload = document.querySelector('.etl_table_1')

EtlTableUpload.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = EtlTableUpload.querySelector('.etl_1_input').value
    post('/uploadEtl1', { data })
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