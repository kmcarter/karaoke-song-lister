// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 1000;
const songs = [
  {
    id: 35,
    artist: 'The Mountain Goats',
    title: 'This Year'
  },
  {
    id: 93,
    artist: 'Florence + the Machine',
    title: 'Shake it Out'
  },
  {
    id: 349,
    artist: 'Led Zepplin',
    title: 'Tangerine'
  }
];

class SongApi {
  static getAllSongs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], songs));
      }, delay);
    });
  }

  static searchSongs(searchTerm) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], songs));
      }, delay);
    });
  }
}

export default SongApi;
