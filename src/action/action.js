import api from '../api'
import { interResponse } from './interceptor'
import * as types from '../vuex/types'

const prefix = '/crell'

export const showMsg = ({dispatch}, content,type='error') => {
  dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({dispatch}) => {
  dispatch(types.HIDE_MSG)
}

//更改options
export const changeOptions = ({ dispatch },options) => {
  dispatch(types.CHANGE_OPTIONS, { options: options })
}
//getUserList
export const getUserList = ({ dispatch }, options) => {
  api.get(prefix + '/user/list', {
    params: options
  }).then(response => {
    if(interResponse(dispatch, response)) return;
    const json = response.data
    dispatch(types.USER_LIST,{
      userList: json
    })
  })
}

export const getUser = ({ dispatch }, id) => {
  api.get(prefix + '/user/' + id)
  .then(response => {
    if(interResponse(dispatch, response)) return;
    let user = response.data
    dispatch(types.USER_DETAIL, {
      userDetail: user
    })
  })
}

export const saveUser = (store, options) => {
  api.put(prefix + '/user', {
    data: options
  }).then(response => {
    if(interResponse(store, response)) return;
    showMsg(store, '保存成功!', 'success')
    store.router.go({path: '/userList'})
  })
}

export const deleteUser = (store, options) => {
  api.del(prefix + '/user', {
    data: options
  }).then(response => {
    if(interResponse(store, response)) return;
    showMsg(store, '删除成功!', 'success')
    store.router.go({path: '/userList'})
  })
}
