<template>
<!--  所有item都展示同一个文章图片-->
<div class="tab-bar-item">
  <slot name="item-icon"></slot>
  <slot name="item-text"></slot>
<!--  solt动态决定，数据动态插入-->
<!--  <img src="../../assets/img/tabbar/icon.jpeg" alt="">-->
<!--  <div>首页</div>-->
</div>
</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>
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
