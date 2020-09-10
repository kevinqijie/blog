import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      component:() => import('../views/layout/index.vue'),
      children:[
        {path:'/', redirect:'/list/'},
        {path:'/list/*', component:() => import('../views/list')},
        {path:'/article/*', component:() => import('../views/article')},
        {path:'/release', component:() => import('../views/release')}
        ]
    },
      {
          path: '/login',
          component:() => import('../views/login/index.vue'),
      },
      {
          path: '/register',
          component:() => import('../views/register/index.vue'),
      },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
