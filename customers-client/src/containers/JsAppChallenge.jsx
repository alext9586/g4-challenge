import React, { Component } from 'react';
import CustomerTableReadOnly from '../components/CustomerTableReadOnly';
import SearchBar from '../components/SearchBar';

class JsAppChallenge extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      searchTerms: "",
      maxResults: 20
    }

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

  increaseSearchResults() {
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
            <SearchBar
              searchTerms={searchTerms}
              searchClick={(e) => { console.log(e) }} />

            <CustomerTableReadOnly
              customers={truncatedData} />

            { maxResults < customers.length ? 
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