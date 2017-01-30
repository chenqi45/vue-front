<template>
  <section>
    <ul class="item">
      <li v-for='user in userList'>
        <a v-link="{name: 'user', params: {id: user.id}}">
          {{user.userName}},{{user.email}}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { getUserList } from '../action/action'

export default {
  vuex: {
    getters: {
      options: ({options}) => options.item,
      userList: ({userList}) => userList.items
    },
    actions: {
      getUserList
    }
  },
  created () {
     this.getUserList(this.options)
  },
  methods: {

  }
}
</script>
