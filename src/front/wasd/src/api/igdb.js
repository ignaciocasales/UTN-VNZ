import axios from 'axios'

const ENDPOINT = '/igdb'

export default {
  getPopularGames (offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=id,cover,name,popularity&order=popularity:desc&limit=40&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': 'key',
        'Accept': 'application/json'
      },

      timeout: 10000
    })
  }
}
