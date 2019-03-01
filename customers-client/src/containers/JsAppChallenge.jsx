import React, { Component } from 'react';
import CustomerTableReadOnly from '../components/CustomerTableReadOnly';
import SearchBar from '../components/SearchBar';

class JsAppChallenge extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      results: [],
      searchTerms: "",
      maxResults: 20
    }

    this.resetResults = this.resetResults.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.increaseSearchResults = this.increaseSearchResults.bind(this);
  }

  componentDidMount() {
    document.title = "JS App Challenge";
    this.getAllCustomers();
  }

  getAllCustomers() {
    fetch('http://localhost:7555/customersJson')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          customers: data,
          results: data
        });
      });
  }

  resetResults() {
    this.setState({
      searchTerms: "",
      results: this.state.customers,
      maxResults: 20
    });
  }

  increaseSearchResults() {
    this.setState({
      maxResults: this.state.maxResults + 20
    });
  }

  performSearch(searchTerms) {
    const results = this.state.customers.filter(customer => {
      const customerLine =
        `${customer.email} ${customer.first_name} ${customer.last_name}` +
        `${customer.ip} ${customer.latitude} ${customer.longitude}`;
      
      return customerLine.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0;
    });

    this.setState({
      searchTerms: searchTerms,
      results: results
    });
  }

  render() {
    const { customers, results, searchTerms, maxResults } = this.state;
    const truncatedData = results.slice(0, maxResults);

    return (
      <div className="container-fluid">
        <h1>JS App Challenge</h1>

        { customers.length > 0 ? (
          <div>
            <SearchBar
              searchTerms={searchTerms}
              clearClick={this.resetResults}
              searchClick={this.performSearch} />

            <h3>Results: {results.length}</h3>

            { results.length > 0 ? (
              <CustomerTableReadOnly
                customers={truncatedData} />
            ) : <h2>No Results</h2> }

            { maxResults < results.length ? 
              <input
                type="button"
                className="btn btn-block btn-primary"
                value="Load 20 more..."
                onClick={this.increaseSearchResults}/>
            : null }
          </div>
        ) : (<h2>Loading...</h2>)}
      </div>
    );
  }
}

export default JsAppChallenge;