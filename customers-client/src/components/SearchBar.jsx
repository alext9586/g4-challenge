import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerms: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchTerms: this.props.searchTerms
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      searchTerms: value
    });
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      searchTerms: ""
    })
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.searchClick(this.state.searchTerms);
  }

  render() {
    const { searchTerms } = this.state;

    return (
      <form className="text-left" onSubmit={this.handleSearch}>
        <div className="form-row">
          <div className="col">
            <input
              name="searchTerms"
              type="text"
              className="form-control form-control-sm"
              onChange={this.handleInputChange}
              value={searchTerms} />
          </div>
          <div className="col">
            <input
              type="button"
              className="btn btn-danger"
              onClick={this.handleClear}
              value="Clear"/>
              
            <input
              type="submit"
              className="btn btn-primary"
              value="Search"/>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchTerms: PropTypes.string,
  searchClick: PropTypes.func.isRequired
};

export default SearchBar;