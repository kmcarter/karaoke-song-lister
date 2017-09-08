import React from 'react';
import PropTypes from 'prop-types';

const SongTitleList = props => {
    return (
        <ul>
            {props.data.map(song => 
                <li key={song.id}>{song.artist} - {song.title}</li>
            )}
        </ul>
    );
};

SongTitleList.propTypes = {
    data: PropTypes.array.isRequired
};

export default SongTitleList;