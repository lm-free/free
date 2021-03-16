// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'

//1。通过vue.use(插件) 安装插件

Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path:'',
    //重定向
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/User/:abc',
    component:User
  },

]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass:'active'//统一改class属性
})

//3.将router对象传入到vue实例
export default router
