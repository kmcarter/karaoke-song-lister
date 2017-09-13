import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import BackButton from '../components/common/BackButton';
import SearchResults from '../components/SearchResults';

const SearchResultsPage = props => {
  return (
    <div>
      <BackButton />
      <h1 className="text-capitalize">Search Results for <strong>{props.match.params.search}</strong></h1>
      <SearchResults searchTerm={props.match.params.search} />
    </div>
  );
};

SearchResultsPage.propTypes = {
  match: PropTypes.object
};

export default withRouter(SearchResultsPage);
