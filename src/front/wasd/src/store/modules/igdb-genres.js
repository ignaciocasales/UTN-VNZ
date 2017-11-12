import igdb from './../../api/igdb'
import * as types from './../mutation-types'

const state = {
  all: []
}

const getters = {
  allGenres: state => state.all
}

const actions = {
  loadGenres ({ commit }, ids) {
    return new Promise((resolve, reject) => {
      const findList = []
      ids.forEach((id) => {
        if (state.all.filter(all => (all.id === id)).length <= 0) {
          findList.push(id)
        }
      })
      if (findList.length > 0) {
        igdb.getGenres(findList.toString())
          .then((response) => {
            commit(types.LOAD_GENRES, { genres: response.data })
            resolve()
          })
          .catch((error) => {
            console.error('WASD Games | ERROR Retrieving Genres.', error)
            reject(error)
          })
      }
      else {
        resolve()
      }
    })
  }
}

const mutations = {
  [types.LOAD_GENRES] (state, { genres }) {
    genres.forEach((current) => {
      state.all.push(current)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
