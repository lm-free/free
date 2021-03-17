<template>
<div>
  <h2>我是首页</h2>
  <h2>我是首页哈哈哈</h2>
  <router-link to="/Home/News">新闻</router-link>
  <router-link to="/Home/Message">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log('crete')
  }
}
</script>

<style scoped>

</style>
