import axios from 'axios'

const ENDPOINT = '/igdb'
const API_KEY = ''
const TIMEOUT = 10000

const randomDate = () => {
  const begin = new Date()
  let end = new Date()
  end.setFullYear(begin.getFullYear() - 5)
  const date = new Date(+begin + Math.random() * (end - begin))
  return date.getTime()
}

export default {
  getPopularGames (offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=id,cover,name,popularity&order=popularity:desc&limit=40&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGame (id) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/' + id + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getPlatform (ids) {
    return axios({
      baseURL: ENDPOINT,

      url: '/platforms/' + ids + '/?fields=id,name',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGenres (ids) {
    return axios({
      baseURL: ENDPOINT,

      url: '/genres/' + ids + '/?fields=id,name',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getRandomGames () {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*&limit=4&filter[popularity][gt]=5&filter[created_at][gt]=' + randomDate(),

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getRandomGamesByPlatform (platformId) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*&limit=10&filter[popularity][gt]=50&filter[platforms][eq]=' + platformId +
      '&filter[created_at][gt]=' + randomDate(),

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  }
}
