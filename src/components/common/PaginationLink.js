import React from 'react';
import PropTypes from 'prop-types';

const PaginationLink = props => {
    return (
        <button className="btn btn-default" onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    );
};

PaginationLink.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

PaginationLink.defaultProps = {
    disabled: false
};

export default PaginationLink;