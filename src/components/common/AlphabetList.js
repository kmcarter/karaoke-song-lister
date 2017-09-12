import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlphabetList = props => {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="alphabet-list d-flex flex-wrap" role="group" aria-label="List of letters">
      {alphabet.map(alpha =>
        <Link key={alpha} to={`lookup/${props.artistOrTitle}/${alpha}`} className="btn btn-secondary btn-lg m-1 text-uppercase">{alpha}</Link>
      )}
      <Link to={`lookup/${props.artistOrTitle}/num`} className="btn btn-secondary btn-lg m-1 text-uppercase">#</Link>
    </div>
  );
};

AlphabetList.propTypes = {
  artistOrTitle: PropTypes.oneOf(['artist', 'title'])
};

export default AlphabetList;