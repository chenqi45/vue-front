<template>
  <div class="main" id="app">
    <router-view></router-view>
    <Toaster></Toaster>
  </div>
</template>

<script>
import store from './vuex/store'
import Toaster from './components/Toaster'
export default {
  store,
  components: { Toaster }
}
</script>

<style>

</style>
