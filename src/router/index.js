import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/renta-tu-espacio',
      name: 'renta-tu-espacio',
      component: () => import('../views/Rentar-Mi-Espacio/Renta-tu-espacio.vue')  
    },
    {
      path: '/info-espacio',
      name: 'info-espacio',
      component: () => import('../views/Rentar-Mi-Espacio/Info-espacio.vue')  
    },
    {
      path: '/ofertar-tu-espacio',
      name: 'ofertar-tu-espacio',
      component: () => import('../views/Rentar-Mi-Espacio/Ofertar-espacio.vue')  
    },
  ]
})

export default router
