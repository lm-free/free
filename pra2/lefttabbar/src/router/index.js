import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('../views/home/Home')
export default new Router({
  routes: [
    {
      path:'',
      redirect:"Home"
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  mode:"history",
})
