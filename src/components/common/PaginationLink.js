import React from 'react';
import PropTypes from 'prop-types';

const PaginationLink = props => {
    return (
        <button className="page-link" onClick={props.onClick}>{props.children}</button>
    );
};

PaginationLink.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default PaginationLink;