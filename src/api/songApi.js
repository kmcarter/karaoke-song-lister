import axios from 'axios';

class SongApi {
  static searchSongs(searchTerm, page = 0, perPage = 100) {
    return axios.get(`http://localhost:5000/search/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }

  static lookupSongsByArtist(searchTerm, page = 0, perPage = 100) {
    return axios.get(`http://localhost:5000/lookup/artist/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }

  static lookupSongsByTitle(searchTerm, page = 0, perPage = 100) {
    return axios.get(`http://localhost:5000/lookup/title/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }
}

export default SongApi;
