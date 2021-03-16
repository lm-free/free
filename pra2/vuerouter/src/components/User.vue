<template>
<div>
  <h2>我是用户</h2>
  <h2>我是用户哈哈哈哈哈哈</h2>
  <h2>{{userId}}</h2>
  <h2></h2>
</div>
</template>

<script>
export default {
name: "user",
  computed: {
  userId() {
    return this.$route.params.abc//route当前现实那个组件就是那个组件
  }
  }
}
</script>

<style scoped>

</style>
