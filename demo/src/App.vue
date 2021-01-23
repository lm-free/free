<template>
  <div id="app">
   <login></login>
  </div>
</template>

<script>
	import login from '@/components/login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  	'login':login,
  }
}
</script>

<style>
#app {

}
</style>
