<template>
<!--  所有item都展示同一个文章图片-->
<div class="tab-bar-item" @click="itemClick">
  <div  v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>
<!--  <div :class="{active:isActive}" >-->
  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
<!--  solt动态决定，数据动态插入-->
<!--  <img src="../../assets/img/tabbar/icon.jpeg" alt="">-->
<!--  <div>首页</div>-->
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick () {
      console.log("ffff")
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.active {
  color:@activeColor;
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size:14px;
  margin-top:3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.tab-bar-item img {
  width:24px;
  height:24px;
}
</style>
