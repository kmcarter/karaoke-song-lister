import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/searchActions';
import SearchForm from '../components/SearchForm';

export const LookupPage = (props) => {
  return (
    <SearchForm
      saveFuelSavings={props.actions.saveFuelSavings}
      calculateFuelSavings={props.actions.calculateFuelSavings}
      fuelSavings={props.fuelSavings}
    />
  );
};

LookupPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LookupPage);
