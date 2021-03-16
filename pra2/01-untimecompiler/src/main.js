// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn = {
    template: '<div>{{ message }}</div>',
    data () {
      return {
        message:"woshizujian"
      }
    }
  }
new Vue({
  el: '#app',
  components: {
    cpn
  },
  // components: { App },
  // template: '<App/>'
  render:function (CreateElement) {
  //   //1。普通用法 createelement('标签',{标签属性},[''])
  //   return CreateElement('h2',
  //     {class:'box'},
  //     ['hellow',CreateElement('button',['按钮'])])
  //2。传入组件对象：
  return CreateElement(App)
  },
})
//选择useEslint关掉 在config下index.js useEslint false
// function sum (num1,num2) {
//   return num1 + num2
// }
//
// console.log(sum(20,30))
