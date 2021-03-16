
//command
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

//es6导入
import {name,age,height} from "./js/info.js"
console.log(name)

//依赖css文件
require('./css/normal.css')

//依赖less文件
require("./css/special.less")
document.writeln('<h2>dddj</h2>')
//引入vue文件
import Vue from 'vue'
import App from './vue/App.vue'
const app = new Vue({
    el:'#app',
    template:'<App></App>',//2。使用app
    //同时el和template出现，优先使用template文件
    components: {
        App //1。注册组件app
    }
})