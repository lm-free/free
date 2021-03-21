<template>
<div>
  <h2>我是用户</h2>
  <h2>我是用户哈哈哈哈哈哈</h2>
  <h2>{{userId}}</h2>
   <button @click="btnClick">按钮</button>
  <h2></h2>
</div>
</template>

<script>
export default {
name: "user",
  computed: {
  userId() {
    return this.$route.params.id//route当前现实那个组件就是那个组件
  }
  },
  methods: {
  btnClick () {
    console.log(this.$router)
    console.log(this.$route)
  }
  },
  created() {
  console.log('user created')
  },
  destroyed() {
    console.log('user destroyed')
  }
}
</script>

<style scoped>

</style>
