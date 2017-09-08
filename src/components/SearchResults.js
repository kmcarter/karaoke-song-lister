import React from 'react';
import PropTypes from 'prop-types';
import SongTitleList from './common/SongTitleList';
import SongApi from '../api/mockSongApi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const thisComp = this;
    SongApi.searchSongs(this.props.searchTerm).then(songs => {
      thisComp.setState({ data: songs });
    }).catch(error => {
      throw(error);
    });
  }

  render() {
    return (
      <SongTitleList data={this.state.data} />
    );
  }
}

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default SearchResults;
