import React from 'react';
import PropTypes from 'prop-types';

const ArtistList = props => {
    return (
        <div>
            {props.data}
        </div>
    );
};

ArtistList.propTypes = {
    data: PropTypes.array.isRequired
};

export default ArtistList;