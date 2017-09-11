import React from 'react';
import PropTypes from 'prop-types';
import SongTitleList from './common/SongTitleList';
import LoadingSpinner from './common/LoadingSpinner';
import SongApi from '../api/mockSongApi';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }

  componentWillMount() {
    const thisComp = this;
    this.setState({ loading: true });
    SongApi.searchSongs(this.props.searchTerm).then(songs => {
      thisComp.setState({ data: songs, loading: false });
    }).catch(error => {
      throw(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.loading && <LoadingSpinner />}
        <SongTitleList data={this.state.data} />
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default SearchResults;
