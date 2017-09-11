import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import Icon from './common/Icon';
import TextInput from './common/TextInput';

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.isValid = this.isValid.bind(this);

    this.state = {
      isValid: true,
      searchTerm: "",
      fireRedirect: false
    };
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.isValid) {
      //console.log(this.props);
      this.props.history.push(`search/${this.state.searchTerm}`);
    }
  }

  onChange(name, value) {
    this.setState({
      searchTerm: value, 
      isValid: this.isValid(value)
    });
  }

  isValid(searchTerm) {
    return searchTerm.length > 2;
  }

  render() {
    return (
      <form id="searchForm">
        <div className="form-row">
          <div className="col">
            <label htmlFor="searchTerm" className="sr-only">Search Term</label>
            <TextInput onChange={this.onChange} name="searchTerm" value={this.state.searchTerm}
              className={!this.state.isValid ? "invalid" : ""} />
            <small id="searchHelpBlock" className="form-text text-muted">
              Search term must be at least 3 characters long.
            </small>
          </div>
          <div className="col-xs col-xs-auto">
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-lg">
              <Icon className="fa-search" />
              {" Search"}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  history: PropTypes.object
};

export default withRouter(SearchForm);
