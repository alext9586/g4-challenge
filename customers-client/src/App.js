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

  render() {
    return (
      <div className="App">
        <h1>Customers Table</h1>
        <CustomerTable customers={this.state.customers} />
        <CustomerForm />
      </div>
    );
  }
}

export default App;
