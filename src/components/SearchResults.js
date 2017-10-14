import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as types from '../constants/searchTypes';
import * as appActions from '../actions/appActions';
import * as searchActions from '../actions/searchActions';
import Pagination from './common/Pagination';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/songApi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchData = this.getSearchData.bind(this);
    this.getPaginatedData = this.getPaginatedData.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.state = {
      page: 0,
      perPage: 100
    };
  }

  componentWillMount() {
    if (!this.props.searchCache.hasOwnProperty(this.props.searchTerm)) {
      this.getSearchData();
    }
  }

  getSearchData(page = 0, perPage = 100) {
    const thisComp = this;
    const searchTerm = this.props.searchTerm;
    this.props.appActions.loading(true);

    const search = getSongApiCall(thisComp.props.searchType);
    search(searchTerm, page, perPage).then(response => {
      saveSearchResults(thisComp.props, { searchTerm, response: response.data });
      thisComp.props.appActions.loading(false);
    }).catch(error => {
      throw (error);
    });
  }

  getPaginatedData(lookup) {
    if (!lookup || lookup.pagination.count == 0) {
      return [];
    }

    const pageInfo = lookup.pagination;

    if (pageInfo.count <= this.state.perPage) {
      return lookup.results;
    }

    const startIndex = this.state.page * this.state.perPage;
    const endIndex = startIndex + this.state.perPage;
    const filteredResults = lookup.results.filter(val => {
      return val.Index >= startIndex && val.Index < endIndex;
    });
    if (filteredResults.length == 0) {
      this.getSearchData(this.state.page, this.state.perPage);
    }
    return filteredResults;
  }

  onPageChange(e, newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const lookup = this.props.searchCache[this.props.searchTerm];
    const data = this.getPaginatedData(lookup);
    const count = lookup ? lookup.pagination.count : data.length;

    if (count == 0) {
      return <p className="alert alert-warning" role="alert">No results found.</p>;
    }

    return (
      <div>
        <Pagination count={count} page={this.state.page} perPage={this.state.perPage} onClick={this.onPageChange} />
        <SongTitleList data={data} />
        <Pagination count={count} page={this.state.page} perPage={this.state.perPage} onClick={this.onPageChange} />
      </div>
    );
  }
}

SearchResults.propTypes = {
  appActions: PropTypes.object.isRequired,
  searchActions: PropTypes.object.isRequired,
  searchCache: PropTypes.object,
  searchTerm: PropTypes.string.isRequired,
  searchType: PropTypes.oneOf(types.TYPES).isRequired
};

function getResultsCache(state, type) {
  switch (type) {
    case types.TYPE_SEARCH:
      return state.search;
    case types.TYPE_ARTIST:
      return state.artist;
    case types.TYPE_TITLE:
      return state.title;
    default:
      throw("Invalid search type passed to SearchResults component.");
  }
}

function saveSearchResults(props, data) {
  switch (props.searchType) {
    case types.TYPE_SEARCH:
      props.searchActions.saveSearchResults(data);
      break;
    case types.TYPE_ARTIST:
      props.searchActions.saveArtistResults(data);
      break;
    case types.TYPE_TITLE:
      props.searchActions.saveTitleResults(data);
      break;
    default:
      throw("Invalid search type passed to SearchResults component.");
  }
}

function getSongApiCall(type) {
  switch (type) {
    case types.TYPE_SEARCH:
      return SongApi.searchSongs;
    case types.TYPE_ARTIST:
      return SongApi.lookupSongsByArtist;
    case types.TYPE_TITLE:
      return SongApi.lookupSongsByTitle;
    default:
      throw("Invalid search type passed to SearchResults component.");
  }
}

function mapStateToProps(state, ownProps) {
  return {
    searchCache: getResultsCache(state.search, ownProps.searchType)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
