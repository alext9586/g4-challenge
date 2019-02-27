import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as actions from "./actions";
import * as reducers from "./reducers";
import CustomerTable from "./components/CustomerTable";
import CustomerForm from "./components/CustomerForm";
import './App.css';

const store = createStore(reducers.customerApp);

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();

    store.subscribe(()=>{
      this.setState(store.getState())
    });

    this.getAllCustomers = this.getAllCustomers.bind(this);
    this.addCustomer = this.addCustomerSave.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  getAllCustomers() {
    fetch('http://localhost:7555/customers/all')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      store.dispatch(actions.viewTable(data));
    });
  }

  componentDidMount() {
    this.getAllCustomers();
  }

  addCustomerSave(customer) {
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
    const { stage } = this.state;

    return (
      <Provider store={store}>
        <div className="App container">
          {stage === reducers.STAGE_START ? (
            <h1>Loading...</h1>
          ) : null }

          {stage === reducers.STAGE_VIEW_TABLE ? (
            <div>
              <h1>Customers Table</h1>
              <div className="text-left">
                <input
                  type="button"
                  className="btn btn-primary"
                  onClick={s => store.dispatch(actions.viewAddCustomer())}
                  value="Add Customer"/>
              </div>
              
              <CustomerTable
                customers={this.state.customers}
                deleteCustomer={this.deleteCustomer}
                />
            </div>
          ) : null }

          {stage === reducers.STAGE_ADD_CUSTOMER ? (
            <div>
              <h1>Customers Table</h1>
              <CustomerForm
                saveClick={this.addCustomerSave}
                cancelClick={this.getAllCustomers}/>
            </div>
          ) : null }
          
        </div>
      </Provider>
    );
  }
}

export default App;
