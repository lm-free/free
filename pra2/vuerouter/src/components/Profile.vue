<template>
<div>
  <h2>我是个人</h2>
  <h2>{{$route.query.name}}</h2>
  <h2>{{$route.query.age}}</h2>
  <h2>{{$route.query.height}}</h2>
</div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("home created")
  },
  destroyed() {
    console.log("home destroyed")
  }
}
</script>

<style scoped>

</style>
