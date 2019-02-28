import React, { Component } from 'react';
import CustomerTableReadOnly from '../components/CustomerTableReadOnly';

class JsAppChallenge extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      searchTerms: [],
      maxResults: 20
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.increaseSearchResults = this.increaseSearchResults.bind(this);
  }

  componentDidMount() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    fetch('http://localhost:7555/customersJson')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({customers: data});
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      searchTerms: value
    });
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      searchTerms: ""
    })
  }

  handleSearch(event) {
    event.preventDefault();
    console.log("Submit")
  }

  increaseSearchResults(event) {
    this.setState({
      maxResults: this.state.maxResults + 20
    })
  }

  render() {
    const { customers, searchTerms, maxResults } = this.state;
    const truncatedData = customers.slice(0, maxResults);

    return (
      <div className="App container">
        <h1>JS App Challenge</h1>

        { customers.length > 0 ? (
          <div>
            <form className="text-left" onSubmit={this.handleSearch}>
              <div className="form-row">
                <div className="col">
                  <input
                    name="searchTerms"
                    type="text"
                    className="form-control form-control-sm"
                    onChange={this.handleInputChange}
                    value={searchTerms} />
                </div>
                <div className="col">
                  <input
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleClear}
                    value="Clear"/>
                    
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Search"/>
                </div>
              </div>
            </form>

            <CustomerTableReadOnly
              customers={truncatedData} />

            <input
              type="button"
              className="btn btn-block btn-primary"
              value="Load 20 more..."
              onClick={this.increaseSearchResults}/>
          </div>
        ) : (<h2>Loading...</h2>)}
      </div>
    );
  }
}

export default JsAppChallenge;