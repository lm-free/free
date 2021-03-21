<template>
  <div id="app">
    <div class="left">
      <left-tabbar>
        <left-tabbar-item path="/home">首页内容
        </left-tabbar-item>
        <left-tabbar-item>机构详情</left-tabbar-item>
        <left-tabbar-item>筛查报告</left-tabbar-item>
        <left-tabbar-item>机构设置</left-tabbar-item>
      </left-tabbar>
    </div>
    <div class="right">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftTabbar from "./components/LeftTabbar/LeftTabbar";
import LeftTabbarItem from "./components/LeftTabbar/LeftTabbarItem";
export default {
  name: 'App',
  components: {
    LeftTabbar,
    LeftTabbarItem,
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/app.css";
</style>
