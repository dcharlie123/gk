import Router from 'vue-router'
import Vue from 'vue'
import headPage from '@/components/headPage'
import mainPage from '@/components/mainPage'
import resultPage from "@/components/resultPage"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'headPage',
      component: headPage 
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage 
    },
    {
      path: '/resultPage',
      name: 'resultPage',
      component: resultPage
    }
  ]
})
