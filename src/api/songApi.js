import axios from 'axios';
/*global __API__*/

class SongApi {
  static searchSongs(searchTerm, page = 0, perPage = 100) {
    return axios.get(`${__API__}/search/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }

  static lookupSongsByArtist(searchTerm, page = 0, perPage = 100) {
    return axios.get(`${__API__}/lookup/artist/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }

  static lookupSongsByTitle(searchTerm, page = 0, perPage = 100) {
    return axios.get(`${__API__}/lookup/title/${encodeURIComponent(searchTerm)}/${page}/${perPage}`);
  }
}

export default SongApi;
