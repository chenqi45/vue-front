import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import userList from './modules/user.list'
import userDetail from './modules/user.detail'
import options from './modules/options'
import showmsg from './modules/showmsg'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    userList,
    userDetail,
    options,
    showmsg
  },
  strict: debug,
  middlewares
})
