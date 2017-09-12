import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import * as searchActions from '../actions/searchActions';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/songApi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchData = this.getSearchData.bind(this);
  }

  componentWillMount() {
    if (!this.props.search.hasOwnProperty(this.props.searchTerm)) {
      this.getSearchData();
    }
  }

  getSearchData() {
    const thisComp = this;
    const searchTerm = this.props.searchTerm;
    this.props.appActions.loading(true);

    SongApi.searchSongs(searchTerm).then(response => {
      const results = response.data;
      thisComp.props.searchActions.saveSearchResults({searchTerm, results});
      thisComp.props.appActions.loading(false);
    }).catch(error => {
      throw(error);
    });
  }

  render() {
    const data = this.props.search[this.props.searchTerm] || [];

    return (
      <div>
        <SongTitleList data={data} />
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
