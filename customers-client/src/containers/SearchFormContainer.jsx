import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerForm from "../components/CustomerForm";

class SearchFormContainer extends Component {
  render() {
    const { saveClick, cancelClick } = this.props;

    return(
      <div>
        <h1>Search Customer</h1>
        <p>The search will perform a case-sensitive match on all fields that are not blank.</p>
        <CustomerForm
          saveClick={saveClick}
          cancelClick={cancelClick}/>
      </div>
    );
  }
}

SearchFormContainer.propTypes = {
  saveClick: PropTypes.func.isRequired,
  cancelClick: PropTypes.func.isRequired
}

export default SearchFormContainer;