import React, { Component } from 'react';
import CustomerTableReadOnly from '../components/CustomerTableReadOnly';
import SearchBar from '../components/SearchBar';

class JsAppChallenge extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      results: [],
      searchTerm: "",
      maxResults: 20
    }

    this.resetResults = this.resetResults.bind(this);
    this.performSearch = this.performSearch.bind(this);
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
        this.setState({
          customers: data,
          results: data
        });
      });
  }

  resetResults() {
    this.setState({
      searchTerm: "",
      results: this.state.customers
    })
  }

  increaseSearchResults() {
    this.setState({
      maxResults: this.state.maxResults + 20
    })
  }

  performSearch(searchTerm) {
    const words = searchTerm.split(' ');
    
    console.log(words);

    this.setState({
      searchTerm: searchTerm
    });
  }

  render() {
    const { results, searchTerms, maxResults } = this.state;
    const truncatedData = results.slice(0, maxResults);

    return (
      <div className="App container">
        <h1>JS App Challenge</h1>

        { results.length > 0 ? (
          <div>
            <SearchBar
              searchTerms={searchTerms}
              clearClick={this.resetResults}
              searchClick={this.performSearch} />

            <CustomerTableReadOnly
              customers={truncatedData} />

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