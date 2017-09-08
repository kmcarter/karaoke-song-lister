import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Icon from '../components/common/Icon';
import SearchResults from '../components/SearchResults';
import '../styles/about-page.css';

const SearchResultsPage = props => {
  return (
    <div>
      <Link to="/">
        <Icon className="fa-long-arrow-left" />
        {" Back"}
      </Link>
      <h1 className="alt-header">Search Results for <strong>{props.match.params.search}</strong></h1>
      <SearchResults searchTerm={props.match.params.search} />
    </div>
  );
};

SearchResultsPage.propTypes = {
  match: PropTypes.object
};

export default withRouter(SearchResultsPage);
