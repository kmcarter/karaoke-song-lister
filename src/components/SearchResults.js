import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import * as searchActions from '../actions/searchActions';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/mockSongApi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchData = this.getSearchData.bind(this);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getSearchData(this.props.searchTerm);
  }

  getSearchData(searchTerm) {
    const thisComp = this;
    this.props.appActions.loading(true);

    if (this.props.search.hasOwnProperty(searchTerm)) {
      thisComp.setState({data: this.props.search[searchTerm]});
      thisComp.props.appActions.loading(false);
    } else {
      SongApi.searchSongs(searchTerm).then(results => {
        thisComp.setState({data: results});
        thisComp.props.searchActions.saveSearchResults({searchTerm, results});
        thisComp.props.appActions.loading(false);
      }).catch(error => {
        throw(error);
      });
    }
  }

  render() {
    return (
      <SongTitleList data={this.state.data} />
    );
  }
}

SearchResults.propTypes = {
  appActions: PropTypes.object.isRequired,
  searchActions: PropTypes.object.isRequired,
  search: PropTypes.object,
  searchTerm: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
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
