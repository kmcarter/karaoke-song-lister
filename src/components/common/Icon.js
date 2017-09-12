import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  return <i className={`fa ${props.className}`} />;
};

Icon.propTypes = {
  className: PropTypes.string.isRequired
};

export default Icon;