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
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--&lt;!&ndash;    <router-link to="/profile">档案</router-link>&ndash;&gt;-->
<!--    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">档案</router-link>-->
<!--    <img src="imgURL">-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
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
    // homeClick () {
    //   //通过代码修改路由
    //   // this.$router.push('/home')
    //   this.$router.replace('/home')
    //   console.log("home")
    // },
    // aboutClick () {
    //   // this.$router.push('/about')
    //   this.$router.replace('/about')
    //   console.log("about")
    // },
    userClick () {
      this.$router.push('/user/'+this.userId)
    },
    profileClick () {
      this.$router.push({
        path:'/profile',
        query: {
          name:'kekek',
          age:18,
          height:1.88
        }
      })
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
