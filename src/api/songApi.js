import axios from 'axios';

class SongApi {
  static searchSongs(searchTerm) {
    return axios.get(`http://localhost:5000/search/${encodeURIComponent(searchTerm)}`);
  }

  static lookupSongsByArtist(searchTerm) {
    return axios.get(`http://localhost:5000/lookup/artist/${encodeURIComponent(searchTerm)}`);
  }

  static lookupSongsByTitle(searchTerm) {
    return axios.get(`http://localhost:5000/lookup/title/${encodeURIComponent(searchTerm)}`);
  }
}

export default SongApi;
