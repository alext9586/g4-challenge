import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerForm from "../components/CustomerForm";

class EditCustomerContainer extends Component {
  render() {
    const { selectedCustomer, saveClick, cancelClick } = this.props;

    return(
      <div>
        <h1>Edit Customer</h1>
        <CustomerForm
          customer={selectedCustomer}
          saveClick={saveClick}
          cancelClick={cancelClick}/>
      </div>
    );
  }
}

EditCustomerContainer.propTypes = {
  selectedCustomer: PropTypes.object.isRequired,
  saveClick: PropTypes.func.isRequired,
  cancelClick: PropTypes.func.isRequired
}

export default EditCustomerContainer;