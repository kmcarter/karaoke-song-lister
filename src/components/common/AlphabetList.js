import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const AlphabetList = props => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className="btn-group alphabet-list" role="group" aria-label="List of letters">
            {alphabet.map(alpha =>
                <Link key={alpha} to={`lookup/${props.artistOrTitle}/${alpha}`} className="btn btn-secondary">{alpha}</Link>
            )}
            <Link to={`lookup/${props.artistOrTitle}/num`} className="btn btn-secondary">#</Link>
        </div>
    );
};

AlphabetList.propTypes = {
    artistOrTitle: PropTypes.oneOf(['artist', 'title'])
};

export default AlphabetList;