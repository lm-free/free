<template>
  <div class="left-bar-item" @click="itemClick">
    <ul>
      <li><a><slot></slot></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftTabbarItem",
  props:{
    path:String
},
  data() {
    return{

    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.left-bar-item ul li{
  line-height: 40px;
  height:40px;
  background: #DEDEDE;
  text-align: center;
}
.left-bar-item ul li:hover{
  background: red;
}
</style>
