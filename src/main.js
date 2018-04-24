// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from '@/Pages/index'
import OrderList from '@/Pages/orderList'

import DetailPage from '@/Pages/detail'
import forecast from '@/Pages/detail/forecast'
import count from '@/Pages/detail/count'
import publish from '@/Pages/detail/publish'
import analysis from '@/Pages/detail/analysis'
import list from '@/Pages/detail/list'
import image from '@/Pages/detail/image'
import effort from '@/Pages/detail/effort'
import display from '@/Pages/detail/display'

import mock from '../Mock/mock'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(VueRouter)

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component: IndexPage
    },
    {
      path:'/orderList',
      component: OrderList
    },
    {
      path:'/detail',
      component: DetailPage,
      redirect:'/detail/count',
      children:[
        {
          path: 'forecast',
          component: forecast
        },
        {
          path: 'count',
          component: count
        },
        {
          path: 'publish',
          component: publish
        },
        {
          path: 'analysis',
          component: analysis
        },
        {
          path: 'list',
          component: list
        },
        {
          path: 'image',
          component: image
        },
        {
          path: 'effort',
          component: effort
        },
        {
          path: 'display',
          component: display
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    Layout
  },
  template: '<Layout/>'
})
