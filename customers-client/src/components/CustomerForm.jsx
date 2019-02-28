import React, {Component} from "react";
import PropTypes from "prop-types";

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { customer } = this.props;

    if(customer) {
      this.setState({
        id: customer.id,
        email: customer.email,
        first_name: customer.first_name,
        last_name: customer.last_name,
        ip: customer.ip,
        latitude: customer.latitude,
        longitude: customer.longitude,
        created_at: customer.created_at,
        updated_at: customer.updated_at
      })
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.cancelClick();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveClick(this.state);
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

        <input
          type="button"
          className="btn btn-danger"
          onClick={this.handleCancel}
          value="Cancel"/>

        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"/>
      </form>
    );
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object,
  saveClick: PropTypes.func.isRequired,
  cancelClick: PropTypes.func.isRequired
}

export default CustomerForm;