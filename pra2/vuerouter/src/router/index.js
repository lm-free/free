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

const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const profile = () => import('../components/Profile')
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
    path:'/home',
    component:Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect:'News'
      },
      {
        path:'News',
        component:News
      },
      {
        path:'Message',
        component: Message
      }
    ]
  },
  {
    path:'/User/:id',
    component:User,
    meta: {
      title: '用户'
    },
  },
  {
    path:'/about',
    component:About,
    meta: {
      title: '关于'
    },
  },
  {
    path:'/profile',
    component: profile,
    meta: {
      title: '档案'
    },
  }

]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass:'active'//统一改class属性
})
//前置钩子（hook）
router.beforeEach((to,from,next) => {
  // 从from跳转to
  document.title = to.matched[0].meta.title
  // console.log(to)
  // console.log("###")
  next()
})

//后置钩子 跳转后回调
// router.afterEach((to,from) => {
//   // console.log(",,,,")
// })
//3.将router对象传入到vue实例
export default router
