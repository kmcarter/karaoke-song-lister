import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input className={`form-control form-control-lg ${props.className}`} type="text" name={props.name}
      placeholder={props.placeholder} value={props.value} onChange={handleChange}/>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default TextInput;
