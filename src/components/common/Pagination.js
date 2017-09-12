import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {
  const totalNumPages = Math.ceil( props.count / props.perPage );
  return (
    <nav className="row" aria-label="Search results navigation">
      <div className="col-3">
        Page {props.page + 1} of {totalNumPages + 1}
      </div>
      <ul className="col-9 pull-right pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default Pagination;