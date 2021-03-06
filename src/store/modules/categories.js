import { CATEGORIES_ALL } from '../actions/categories'
import apiCall from '../../utils/api'

const state = {
  categories: [],
};

const getters = {
  getCategories() {
    return state.categories
  }
};

const actions = {
  [CATEGORIES_ALL]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      apiCall('categories', 'GET', {})
        .then(resp => {
          commit(CATEGORIES_ALL, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(CATEGORIES_ALL, err);
          reject(err)
        })
    })
  }
};

const mutations = {
  [CATEGORIES_ALL]: (state, resp) => {
    state.categories = resp.categories
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
