import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    
    // Rutas de los modelos
    
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../models/inicio/components/Inicio.vue'),
    },
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../models/contador/components/Contador.vue'),
    },
    {
      path: '/listaDeTareas',
      name: 'lista-de-tareas',
      component: () => import('../models/ListaDeTareas/components/listaDeTareas.vue'),
    },
    {
      path: '/sideBar',
      name: 'SideBar',
      component: () => import('../components/sideBar.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../models/registro/views/RegistrarView.vue'),
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../models/calcular/views/CalcularView.vue'),
    },
  ], 
})

export default router
