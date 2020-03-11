import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
const Tab = r => require.ensure([],() => r (require("../components/tab/tab")));
const Confirm = r => require.ensure([],() => r (require("../components/confirm/confirm")));
const buttonHover = r => require.ensure([],() => r (require("../components/button-hover/buttonHover")));
const like = r => require.ensure([],() => r (require("../components/like/like")));
const loading = r => require.ensure([],() => r (require("../components/loading/loading")));
const meun = r => require.ensure([],() => r (require("../components/meun/meun")));
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/buttonHover',
      name: 'buttonHover',
      component: buttonHover
    },
    {
      path: '/like',
      name: 'like',
      component: like
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/meun',
      name: 'meun',
      component: meun
    },

  ]
})
