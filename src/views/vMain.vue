<template>
  <div>
    <countup :start-val=0 :end-val=4.35 :decimals=2 :duration=2 ></countup>
  </div>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style scoped>

</style>
<script>
import NProgress from 'nprogress'
import action from '../action/action'
import Group from 'vux/src/components/group'
import Switch from 'vux/src/components/switch'
import Cell from 'vux/src/components/cell'
import countup from 'vux/src/components/countup'
import Countdown from 'vux/src/components/countdown'
import {Tabbar,TabbarItem} from 'vux/src/components/tabbar'
export default {
  components: {
    Group,
    Switch,
    Cell,
    countup,
    Countdown,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      show: true,
      value: ''
    }
  },
  created () {

  },
  methods: {
    finish: function (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    }
  }
}
</script>
