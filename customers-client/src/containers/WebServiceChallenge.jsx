import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as actions from "../actions";
import * as reducers from "../reducers";
import CustomerTableContainer from "./CustomerTableContainer";
import AddCustomerContainer from "./AddCustomerContainer";
import EditCustomerContainer from "./EditCustomerContainer";
import SearchFormContainer from "./SearchFormContainer";
import SearchResultsContainer from "./SearchResultsContainer";

const store = createStore(reducers.customerApp);

class Challenge2 extends Component {
  constructor() {
    super();
    this.state = store.getState();

    store.subscribe(()=>{
      this.setState(store.getState())
    });

    this.getAllCustomers = this.getAllCustomers.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.editCustomer = this.viewEditCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.searchCustomer = this.searchCustomer.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
  }

  componentDidMount() {
    document.title = "Web Service Challenge";
    this.getAllCustomers();
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

  searchCustomer(customer) {
    console.log(customer);
    fetch('http://localhost:7555/customers/search', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    }).then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      store.dispatch(actions.viewSearchResults(data));
    });
  }

  viewEditCustomer(selectedCustomer) {
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
        <div className="container-fluid">
          {stage === reducers.STAGE_LOADING ? (
            <h1>Loading...</h1>
          ) : null }

          {stage === reducers.STAGE_VIEW_TABLE ? (
            <CustomerTableContainer
              customers={customers}
              addCustomerClick={s => store.dispatch(actions.viewAddCustomer())}
              searchClick={s => store.dispatch(actions.viewSearchCustomer())}
              editCustomerClick={this.viewEditCustomer}
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

          {stage === reducers.STAGE_SEARCH_CUSTOMER ? (
            <SearchFormContainer
              saveClick={this.searchCustomer}
              cancelClick={this.discardChanges} />
          ) : null }

          {stage === reducers.STAGE_SEARCH_RESULTS ? (
            <SearchResultsContainer
              customers={customers}
              backClick={this.getAllCustomers}
              editCustomerClick={this.viewEditCustomer}
              deleteCustomerClick={this.deleteCustomer} />
          ) : null }
          
        </div>
      </Provider>
    );
  }
}

export default Challenge2;
