import React, { Component } from 'react';

class EtlChallengeContainer extends Component {
  constructor() {
    super();

    this.state = {
      etl1data: "",
      etl2data: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.etl1Submit = this.etl1Submit.bind(this);
    this.etl2Submit = this.etl2Submit.bind(this);
  }

  componentDidMount() {
    document.title = "ETL Challenge";
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  post(url, data) {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: data})
    }).then(()=>{
      alert("Data uploaded!");
    }, ()=>{
      alert("Data failed uploading!");
    });
  }

  etl1Submit(event) {
    event.preventDefault();
    this.post('http://localhost:7555/uploadEtl1', this.state.etl1data);
  }

  etl2Submit(event) {
    event.preventDefault();
    this.post('http://localhost:7555/uploadEtl2', this.state.etl2data);
  }

  render() {
    const { etl1data, etl2data } = this.state;

    return(
      <div className="container-fluid">
        <h1>ETL Challenge</h1>
        <form className="etl_table_1" onSubmit={this.etl1Submit}>
          <h2>ETL Table 1</h2>
          <textarea name="etl1data" cols="100" rows="10" value={etl1data} onChange={this.handleInputChange}></textarea>
          <input type="submit" value="Submit" />
        </form>

        <form className="etl_table_2" onSubmit={this.etl2Submit}>
          <h2>ETL Table 2</h2>
          <textarea name="etl2data" cols="100" rows="10" value={etl2data} onChange={this.handleInputChange}></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
}

export default EtlChallengeContainer;