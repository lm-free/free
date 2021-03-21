<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/mianTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
</style>
