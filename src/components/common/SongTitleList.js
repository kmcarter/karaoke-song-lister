import React from 'react';
import PropTypes from 'prop-types';

const SongTitleList = props => {
  return (
    <ul className="list-group">
      {props.data.map(song => (
        <li key={song.Id} className="list-group-item">
          <div>{song.Title}</div>
          <small>{song.Artist}</small>
        </li>
      ))}
    </ul>
  );
};

SongTitleList.propTypes = {
  data: PropTypes.array.isRequired
};

export default SongTitleList;