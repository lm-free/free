<template>
  <tab-bar>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/icon.jpeg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/icon.jpeg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/icon.jpeg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/icon.jpeg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: 'App',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>
