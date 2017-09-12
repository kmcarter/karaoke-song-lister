import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';
import * as lookupActions from '../actions/lookupActions';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/mockSongApi';

class LookupResults extends React.Component {
  constructor(props) {
    super(props);
    this.getLookupData = this.getLookupData.bind(this);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getLookupData(this.props.artistOrTitle, this.props.searchTerm);
  }

  getLookupData(artistOrTitle, searchTerm) {
    const thisComp = this;
    this.props.appActions.loading(true);

    if (this.props.lookup[artistOrTitle].hasOwnProperty(searchTerm)) {
      thisComp.setState({ data: this.props.lookup[artistOrTitle][searchTerm] });
      thisComp.props.appActions.loading(false);
    } else {
      const songApiLookup = artistOrTitle === "artist" ? SongApi.lookupSongsByArtist : SongApi.lookupSongsByTitle;
      songApiLookup(searchTerm).then(results => {
        thisComp.setState({ data: results });
        thisComp.props.lookupActions.saveLookupResults({ artistOrTitle, searchTerm, results });
        thisComp.props.appActions.loading(false);
      }).catch(error => {
        throw (error);
      });
    }
  }

  render() {
    return (
      <SongTitleList data={this.state.data} />
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

function mapStateToProps(state, ownProps) {
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
