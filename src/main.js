import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import routerMap from './router'
import filters from './filters'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)
var router = new VueRouter({history: true})
routerMap(router)
sync(store, router)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

router.beforeEach((transition) => {
  if (transition.to.auth) {
    if (window.localStorage.token) {
      transition.next()
    } else {
      var redirect = encodeURIComponent(transition.to.path)
      transition.redirect('/login?redirect=' + redirect)
    }
  } else {
    transition.next()
  }
})

router.start(App, 'app')
