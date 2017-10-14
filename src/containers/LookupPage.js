import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import * as types from '../constants/searchTypes';
import BackButton from '../components/common/BackButton';
import SearchResults from '../components/SearchResults';

export const LookupPage = (props) => {
  return (
    <div>
      <BackButton />
      <h1 className="text-capitalize"><strong>{props.match.params.letter}</strong> {props.match.params.artistOrTitle}s</h1>
      <SearchResults searchTerm={props.match.params.letter}
        searchType={props.match.params.artistOrTitle == "artist" ? types.TYPE_ARTIST : types.TYPE_TITLE} />
    </div>
  );
};

LookupPage.propTypes = {
  match: PropTypes.object
};

export default withRouter(LookupPage);
