import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as actions from "./actions";
import * as reducers from "./reducers";
import CustomerTableContainer from "./containers/CustomerTableContainer";
import AddCustomerContainer from "./containers/AddCustomerContainer";
import EditCustomerContainer from "./containers/EditCustomerContainer";
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
    this.addCustomer = this.addCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
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

  commitChanges() {
    store.dispatch(actions.loading());
    setTimeout(()=>{
      this.getAllCustomers();
    }, 500);
  }

  discardChanges() {
    store.dispatch(actions.cancel());
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
      this.commitChanges();
    });
  }

  updateCustomer(customer) {
    fetch('http://localhost:7555/customers/updateCustomer', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    }).then(()=>{
      this.commitChanges();
    });
  }

  editCustomer(selectedCustomer) {
    store.dispatch(actions.viewEditCustomer(selectedCustomer));
  }

  deleteCustomer(customerId) {
    fetch('http://localhost:7555/customers/deleteCustomer', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({customerId: customerId})
    }).then(()=>{
      this.commitChanges();
    });
  }

  render() {
    const { stage, customers, selectedCustomer } = this.state;

    return (
      <Provider store={store}>
        <div className="App container">
          {stage === reducers.STAGE_LOADING ? (
            <h1>Loading...</h1>
          ) : null }

          {stage === reducers.STAGE_VIEW_TABLE ? (
            <CustomerTableContainer
              customers={customers}
              addCustomerClick={s => store.dispatch(actions.viewAddCustomer())}
              editCustomerClick={this.editCustomer}
              deleteCustomerClick={this.deleteCustomer} />
          ) : null }

          {stage === reducers.STAGE_ADD_CUSTOMER ? (
            <AddCustomerContainer
              saveClick={this.addCustomer}
              cancelClick={this.discardChanges} />
          ) : null }

          {stage === reducers.STAGE_EDIT_CUSTOMER ? (
            <EditCustomerContainer
              selectedCustomer={selectedCustomer}
              saveClick={this.updateCustomer}
              cancelClick={this.discardChanges} />            
          ) : null }
          
        </div>
      </Provider>
    );
  }
}

export default App;
