<template>
  <div id="app">
<!--    <router-link to="/Home" tag="button" active-class="active">首页</router-link>-->
<!--    <router-link to="/About" tag="button">关于</router-link>-->
<!--    <router-link to="/Home" tag="button" active-class="active">首页</router-link>-->
<!--    <router-link to="/About" tag="button">关于</router-link>-->
<!--   <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <img src="imgURL">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        userId:'lisi',
        imgURL:'http://www.baidu.com/logo.png'
    }
  },
  methods: {
    homeClick () {
      //通过代码修改路由
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log("home")
    },
    aboutClick () {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log("about")
    }
  }
}
</script>

<style>
/*.router-link-active {*/
/*  color:#f00;*/
/*}*/
active {
  color:#f00;
}
</style>
