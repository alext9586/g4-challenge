import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomerTableReadOnly extends Component {
  generateRow(customer, index) {
    return (
      <tr key={customer.id}>
        <td>{index}</td>
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
    let rows = customers.map((customer, index) => {
      return this.generateRow(customer, index);
    });

    return(
      <table className="table table-dark table-striped">
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
    return this.generateTable();
  }
}

CustomerTableReadOnly.propTypes = {
  customers: PropTypes.array.isRequired
}

export default CustomerTableReadOnly;