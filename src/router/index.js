import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/Home.vue')  
    },
    {
      path: '/AsientosReservados',
      name: 'AsientosReservados',
      component: () => import('../views/Reservas/AsientosReservados.vue')
    },
    {
      path: '/ReservasVuelos',
      name: 'ReservasVuelos',
      component: () => import('../views/Reservas/ReservasDeVuelo.vue')
    },
    {
      path: '/VuelosDisponibles',
      name: 'VuelosDisponibles',
      component: () => import('../views/Vuelos/VuelosDisponibles.vue')
    },
    {
      path: '/LineasDeVuelo',
      name: 'LineasDeVuelo',
      component: () => import('../views/Vuelos/LineasDeVuelo.vue')
    },
    {
      path: '/VuelosCancelados',
      name: 'VuelosCancelados',
      component: () => import('../views/MisVuelos/VuelosCancelados.vue')
    },
    {
      path: '/ProximosVuelos',
      name: 'ProximosVuelos',
      component: () => import('../views/MisVuelos/ProximosVuelos.vue')
    },
  ]
})

export default router
