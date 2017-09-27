import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import PaginationLink from './PaginationLink';

const Pagination = props => {
  const totalNumPages = Math.floor( props.count / props.perPage );
  
  const onNextClick = e => {
    e.preventDefault();
    props.onClick(e, props.page + 1);
  };
  
  const onPreviousClick = e => {
    e.preventDefault();
    props.onClick(e, props.page - 1);
  };

  const onPageClick = e => {
    props.onClick(e, parseInt(e.currentTarget.value));
  };

  let rows = [];
  for (let i = 0; i <= totalNumPages; i++) {
    rows.push(<option key={i} value={i}>{i + 1}</option>);
  }

  return (
    <form className="row" aria-label="Search results navigation">
      <div className="col-4 pt-2">
        Page {props.page + 1} of {totalNumPages + 1}
      </div>
      <div className="col-4" />
      <div className="col-4">
        <div className="input-group input-group-sm">
          <span className="input-group-btn">
            <PaginationLink onClick={onPreviousClick} disabled={props.page == 0}><Icon className="fa-arrow-left" /></PaginationLink>
          </span>
          <select className="form-control custom-select" value={props.page} onChange={onPageClick}>
            {rows}
          </select>
          <span className="input-group-btn">
            <PaginationLink onClick={onNextClick} disabled={props.page == totalNumPages}><Icon className="fa-arrow-right" /></PaginationLink>
          </span>
        </div>
      </div>
    </form>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default Pagination;