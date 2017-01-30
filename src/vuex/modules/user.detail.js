import {
  USER_DETAIL
} from '../types'

const state = {
  item:{}
}

const mutations = {
  [USER_DETAIL](state,action){
    state.item = {...state.item, ...action.userDetail }
  }
}

export default {
  state,
  mutations
}
