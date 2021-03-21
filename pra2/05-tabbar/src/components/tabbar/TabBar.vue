<template>
    <div id="tab-tar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-tar{
  display: flex;
  height:49px;
  background:#f6f6f6;

  position: fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.02);
}

</style>
