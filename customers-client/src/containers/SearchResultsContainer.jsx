import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerTable from "../components/CustomerTable";

class SearchResultsContainer extends Component {
  render() {
    const { customers, editCustomerClick, deleteCustomerClick, backClick } = this.props;

    return (
      <div>
        <h1>Search Results</h1>
        <div className="text-left">
          <input
            type="button"
            className="btn btn-primary"
            onClick={backClick}
            value="Back"/>
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

SearchResultsContainer.propTypes = {
  customers: PropTypes.array.isRequired,
  editCustomerClick: PropTypes.func.isRequired,
  deleteCustomerClick: PropTypes.func.isRequired,
  backClick: PropTypes.func.isRequired
};

export default SearchResultsContainer;