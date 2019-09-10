import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/'
})

let urlParams = 'movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query='

export default new Vuex.Store({
  state: {
    //NOTE this will be all the movies we get back from the api
    movies: [],
    activeMovie: {}
  },
  mutations: {
    //NOTE first parameter is always state, second one is data passed from calling the commit
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
    }
  },
  actions: {
    //NOTE the method name is what you will refer to when using dispatch, actions always take in an object first, and the data from the component second
    async getMovies({ commit, dispatch }, query) {
      try {
        let res = await api.get(urlParams + query)
        //NOTE the mutations are generally named 'set' something 
        commit('setMovies', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    selectMovie({ commit }, movie) {
      commit('setActiveMovie', movie)
    }
  }
})
