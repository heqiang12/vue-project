import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Layout from '@/components/layout'
import People from '@/components/people'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/layout',
      name:'layout',
      component:Layout
    },
    {
      path:'/layout/people',
      name:'people',
      component:People
    }
  ]
})
