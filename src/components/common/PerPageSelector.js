import React from 'react';
import PropTypes from 'prop-types';

const PerPageSelector = props => {
  const options = props.children.map(function(element) {
    return <option key={element} value={element}>{element} per page</option>;
  });
  return (
    <div className="form-inline">
      <select className="form-control form-control-sm custom-select" value={props.value} onChange={props.onChange}>
        {options}
      </select>
    </div>
  );
};

PerPageSelector.propTypes = {
  children: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  value: React.PropTypes.number,
  onChange: PropTypes.func
};

PerPageSelector.defaultProps = {
  disabled: false
};

export default PerPageSelector;