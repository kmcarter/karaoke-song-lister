import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
    if (!this.props.search.hasOwnProperty(this.props.searchTerm)) {
      this.getSearchData();
    }
  }

  getSearchData(page = 0, perPage = 100) {
    const thisComp = this;
    const searchTerm = this.props.searchTerm;
    this.props.appActions.loading(true);

    SongApi.searchSongs(searchTerm, page, perPage).then(response => {
      thisComp.props.searchActions.saveSearchResults({ searchTerm, response: response.data });
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
    const lookup = this.props.search[this.props.searchTerm];
    const data = this.getPaginatedData(lookup);
    const count = lookup ? lookup.pagination.count : data.length;

    return (
      <div>
        { count > 0 && <Pagination count={count} page={this.state.page} perPage={this.state.perPage} onClick={this.onPageChange} /> }
        { count > 0 && <SongTitleList data={data} /> }
        { count == 0 && <p className="alert alert-warning" role="alert">No results found.</p> }
      </div>
    );
  }
}

SearchResults.propTypes = {
  appActions: PropTypes.object.isRequired,
  searchActions: PropTypes.object.isRequired,
  search: PropTypes.object,
  searchTerm: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
