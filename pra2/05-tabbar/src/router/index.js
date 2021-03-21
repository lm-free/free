import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
// 1.安装插件
Vue.use(Router)
// 2。创建路由

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    components:Home
  },
  {
    path:'/cart',
    components:Cart
  },
  {
    path:'/category',
    components:Category
  },
  {
    path:'/profile',
    components:Profile
  }
]
const router = new Router({
  routes,
})
//导出
export default router


