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

    this.getAllCustomers = this.getAllCustomers.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  getAllCustomers() {
    fetch('http://localhost:7555/customers/all')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({customers: data});
    });
  }

  componentDidMount() {
    this.getAllCustomers();
  }

  addCustomer(customer) {
    fetch('http://localhost:7555/customers/addCustomer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    }).then(()=>{
      this.getAllCustomers();
    });
  }

  deleteCustomer(customerId) {
    fetch('http://localhost:7555/customers/deleteCustomer', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({customerId: customerId})
    }).then(()=>{
      this.getAllCustomers();
    });
  }

  render() {
    return (
      <div className="App container">
        <h1>Customers Table</h1>
        <CustomerTable
          customers={this.state.customers}
          deleteCustomer={this.deleteCustomer}
          />
        <CustomerForm save={this.addCustomer} />
      </div>
    );
  }
}

export default App;
