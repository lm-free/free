<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @cilck="btnClick()">按钮</button>
    <h2>{{ name }}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
name: "app",
  components: {
  Cpn
  },
  data () {
    return {
      message:'meaaage',
      name:"name"
    }
  },
  methods: {
    btnClick () {
      console.log("aaa")
    }
  }
}
</script>

<style scoped>
.title{
  color:green
}
</style>