import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import PaginationLink from './PaginationLink';

const Pagination = props => {
  const totalNumPages = Math.floor( props.count / props.perPage );
  
  const onNextClick = e => {
    props.onClick(e, props.page + 1);
  };
  
  const onPreviousClick = e => {
    props.onClick(e, props.page - 1);
  };

  const onPageClick = e => {
    props.onClick(e, e.currentTarget.innerText - 1);
  };

  let rows = [];
  for (let i = 0; i <= totalNumPages; i++) {
    rows.push((
      <li key={i} className={`page-item ${props.page == i && 'active'}`}>
        <PaginationLink onClick={onPageClick}>{i + 1}</PaginationLink>
      </li>
    ));
  }

  return (
    <nav className="row" aria-label="Search results navigation">
      <div className="col-3">
        Page {props.page + 1} of {totalNumPages + 1}
      </div>
      <ul className="col-9 justify-content-end pagination">
        <li className={`page-item ${props.page == 0 && "disabled"}`}>
          <PaginationLink onClick={onPreviousClick}><Icon className="fa-arrow-left" /></PaginationLink>
        </li>
        {rows}
        <li className={`page-item ${props.page == totalNumPages && "disabled"}`}>
          <PaginationLink onClick={onNextClick}><Icon className="fa-arrow-right" /></PaginationLink>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default Pagination;