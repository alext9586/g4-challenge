import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomerTable extends Component {
  generateRow(customer) {
    return (
      <tr key={customer.id}>
        <td>
          <input
            type="button"
            className="btn btn-warning btn-sm btn-block"
            onClick={e => this.props.editCustomerClick(customer)}
            value="Edit"/>
          <input
            type="button"
            className="btn btn-danger btn-sm btn-block"
            onClick={e => this.props.deleteCustomerClick(customer.id)}
            value="Delete"/>
        </td>
        <td>{customer.email}</td>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.ip}</td>
        <td>{customer.latitude}</td>
        <td>{customer.longitude}</td>
        <td>{customer.created_at}</td>
        <td>{customer.updated_at}</td>
      </tr>
    );
  }

  generateTable() {
    const { customers } = this.props;    
    let rows = customers.map((customer) => {
      return this.generateRow(customer);
    });

    return(
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>IP Address</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    const hasCustomers = this.props.customers.length > 0;
    return hasCustomers ? this.generateTable() : (<h2>No customers found</h2>);
  }
}

CustomerTable.propTypes = {
  customers: PropTypes.array.isRequired,
  editCustomerClick: PropTypes.func.isRequired,
  deleteCustomerClick: PropTypes.func.isRequired
}

export default CustomerTable;