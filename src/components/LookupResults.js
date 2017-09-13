import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';
import * as lookupActions from '../actions/lookupActions';
import Pagination from './common/Pagination';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/songApi';

class LookupResults extends React.Component {
  constructor(props) {
    super(props);
    this.getLookupData = this.getLookupData.bind(this);
    this.getPaginatedData = this.getPaginatedData.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.state = {
      page: 0,
      perPage: 100
    };
  }

  componentWillMount() {
    if (!this.props.lookup[this.props.artistOrTitle].hasOwnProperty(this.props.searchTerm)) {
      this.getLookupData();
    }
  }

  getLookupData(page = 0, perPage = 100) {
    const thisComp = this;
    const artistOrTitle = this.props.artistOrTitle;
    const searchTerm = this.props.searchTerm;
    this.props.appActions.loading(true);

    const songApiLookup = artistOrTitle === "artist" ? SongApi.lookupSongsByArtist : SongApi.lookupSongsByTitle;
    songApiLookup(searchTerm, page, perPage).then(response => {
      thisComp.props.lookupActions.saveLookupResults({ artistOrTitle, searchTerm, response: response.data });
      thisComp.props.appActions.loading(false);
    }).catch(error => {
      throw (error);
    });
  }

  getPaginatedData(lookup) {
    if (!lookup) {
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
      this.getLookupData(this.state.page, this.state.perPage);
    }
    return filteredResults;
  }

  onPageChange(e, newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const lookup = this.props.lookup[this.props.artistOrTitle][this.props.searchTerm];
    const data = this.getPaginatedData(lookup);

    return (
      <div>
        <Pagination count={data.length} page={this.state.page} perPage={this.state.perPage} onClick={this.onPageChange} />
        <SongTitleList data={data} />
      </div>
    );
  }
}

LookupResults.propTypes = {
  appActions: PropTypes.object.isRequired,
  lookupActions: PropTypes.object.isRequired,
  lookup: PropTypes.object,
  searchTerm: PropTypes.string.isRequired,
  artistOrTitle: PropTypes.oneOf(["artist", "title"]).isRequired
};

function mapStateToProps(state) {
  return {
    lookup: state.lookup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    lookupActions: bindActionCreators(lookupActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LookupResults);
