import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/inicio',
      name: 'inico',
      component: () => import('../views/Inicio.vue')  
    },
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
    {
      path: '/rentar-espacio',
      name: 'rentar-espacio',
      component: () => import('../views/Rentar-espacio/Rentar-espacio.vue')  
    },
    {
      path: '/detalles-espacio',
      name: 'detalles-espacio',
      component: () => import('../views/Rentar-espacio/Detalles-espacio.vue')  
    },
    {
      path: '/catalogo-espacios',
      name: 'catalogo-espacios',
      component: () => import('../views/Rentar-espacio/Catalogo-espacios.vue')  
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../views/Formulario/Formulario.vue')  
    },
  ]
})

export default router
