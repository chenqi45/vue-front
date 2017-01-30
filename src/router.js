export default (router) => {
  router.map({
    '/': {
      name: 'index',
      component: function (resolve) {
        require(['./views/vMain.vue'], resolve)
      }
    },
    '*': {
      component: function (resolve) {
        require(['./views/vMain.vue'], resolve)
      }
    },
    '/userList': {
      name: 'userList',
      component: function (resolve) {
        require(['./views/vUserList.vue'], resolve)
      }
    },
    '/user/:id': {
      name: 'user',
      component: function (resolve) {
        require(['./views/vUser.vue'], resolve)
      }
    },
    '/login': {
      name: 'login',
      component: function (resolve) {
        require(['./views/vLogin.vue'], resolve)
      }
    }
  })
}
