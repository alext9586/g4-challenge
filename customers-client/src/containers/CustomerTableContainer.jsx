import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerTable from "../components/CustomerTable";

class CustomerTableContainer extends Component {
  render() {
    const { customers, addCustomerClick, editCustomerClick, deleteCustomerClick, searchClick } = this.props;

    return (
      <div>
        <h1>Customers Table</h1>
        <div className="text-left">
          <input
            type="button"
            className="btn btn-primary"
            onClick={addCustomerClick}
            value="Add Customer"/>
          <input
            type="button"
            className="btn btn-secondary"
            onClick={searchClick}
            value="Search"/>
        </div>
        
        <CustomerTable
          customers={customers}
          editCustomerClick={editCustomerClick}
          deleteCustomerClick={deleteCustomerClick}
          />
      </div>
    );
  }
}

CustomerTableContainer.propTypes = {
  customers: PropTypes.array.isRequired,
  addCustomerClick: PropTypes.func.isRequired,
  editCustomerClick: PropTypes.func.isRequired,
  deleteCustomerClick: PropTypes.func.isRequired,
  searchClick: PropTypes.func.isRequired
};

export default CustomerTableContainer;