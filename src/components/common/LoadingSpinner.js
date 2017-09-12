import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from './Icon';

const LoadingSpinner = (props) => {
  return (
    <div className="overlay" style={{ display: props.loading ? "block" : "none" }}>
      <Icon className="fa-spinner fa-pulse fa-3x fa-fw" />
    </div>
  );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

LoadingSpinner.defaultProps = {
  loading: true
};

function mapStateToProps(state) {
  return {
    loading: state.app.loading
  };
}

export default connect(mapStateToProps)(LoadingSpinner);