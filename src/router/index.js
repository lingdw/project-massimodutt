import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index'
import Login from '../view/Login'
import Register from '../view/Register'
import GoodSearch from '../view/GoodSearch'
import GoodDetail from '../view/GoodDetail'
import ShoppingCart from '../view/ShoppingCart'
import UserCenter from '../view/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      alias: '/'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/goodSearch',
      name: 'GoodSearch',
      component: GoodSearch,
    },
    {
      path: '/goodDetail',
      name: 'GoodDetail',
      component: GoodDetail,
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/userCenter',
      name: 'UserCenter',
      component: UserCenter,
    },
  ],
  mode: 'history',
})
