import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const LoadingSpinner = (props) => {
    return (
        <div className="overlay">
            <Icon className="fa-spinner fa-pulse fa-3x fa-fw" />
        </div>
    );
};

LoadingSpinner.propTypes = {

};

export default LoadingSpinner;