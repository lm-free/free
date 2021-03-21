<template>
<div>
  <h2>我是首页</h2>
  <h2>我是首页哈哈哈</h2>
  <router-link to="/Home/News">新闻</router-link>
  <router-link to="/Home/Message">消息</router-link>
  <router-view></router-view>
  <div>{{ message }}</div>
</div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      message:'message',
      path:'/home/news'
    }
  },
  // created() {
  //   console.log('crete');
  // },
  // destroyed() {
  //   console.log('destroyed');
  // },
  activated() {
    //组件状态活跃时执行以下操作
    console.log('activated');
    this.$router.push(this.path)
  },
  // deactivated() {
  //   // console.log('deactivated');
  //   // this.path = this.$route.path;
  // }
  beforeRouteLeave(to,from,next) {
    //记入上一次离开
    console.log(this.path);
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
