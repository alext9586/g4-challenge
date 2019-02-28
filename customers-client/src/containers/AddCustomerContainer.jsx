import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerForm from "../components/CustomerForm";

class AddCustomerContainer extends Component {
  render() {
    const { saveClick, cancelClick } = this.props;

    return(
      <div>
        <h1>Add Customer</h1>
        <CustomerForm
          saveClick={saveClick}
          cancelClick={cancelClick}/>
      </div>
    );
  }
}

AddCustomerContainer.propTypes = {
  saveClick: PropTypes.func.isRequired,
  cancelClick: PropTypes.func.isRequired
}

export default AddCustomerContainer;