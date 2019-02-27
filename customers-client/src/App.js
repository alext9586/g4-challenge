import React, { Component } from 'react';
import CustomerTable from "./components/CustomerTable";
import CustomerForm from "./components/CustomerForm";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };

    this.addCustomer = this.addCustomer.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:7555/customers/all')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        this.setState({customers: data});
      });
  }

  addCustomer(customer) {
    fetch('http://localhost:7555/customers/addCustomer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    });
  }

  render() {
    return (
      <div className="App container">
        <h1>Customers Table</h1>
        <CustomerTable customers={this.state.customers} />
        <CustomerForm save={this.addCustomer} />
      </div>
    );
  }
}

export default App;
