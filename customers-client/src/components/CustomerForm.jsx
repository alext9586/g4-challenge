import React, {Component} from "react";
import PropTypes from "prop-types";

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.customer || {
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      ip: "",
      latitude: null,
      longitude: null,
      created_at: null,
      updated_at: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:7555/customers/addCustomer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    });
  }

  render() {
    const {email, first_name, last_name, ip, latitude, longitude} = this.state;

    return (
      <form className="text-left" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Email:
            <input name="email" type="email" className="form-control" value={email} onChange={this.handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            First Name:
            <input name="first_name" type="text" className="form-control" value={first_name} onChange={this.handleInputChange} />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Last Name:
            <input name="last_name" type="text" className="form-control" value={last_name} onChange={this.handleInputChange} />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            IP:
            <input name="ip" type="text" className="form-control" value={ip} onChange={this.handleInputChange} />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Latitude:
            <input name="latitude" type="text" className="form-control" value={latitude || ""} onChange={this.handleInputChange} />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Longitude:
            <input name="longitude" type="text" className="form-control" value={longitude || ""} onChange={this.handleInputChange} />
          </label>
        </div>

        <input type="submit" value="Save"/>
      </form>
    );
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object
}

export default CustomerForm;