
//command导入
const {add,mul} = require('./mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

//es6导入
import {name,age,height} from "./info.js"
console.log(name)

//依赖css文件
require('./css/normal.css')

//依赖less文件
require("./css/special.less")
document.writeln('<h2>dddj</h2>')

//5。使用vue进行开发
import Vue from 'vue'
const app = new Vue({
    el:'#app',
    data:{
        message:'ninnh'
    }
})

