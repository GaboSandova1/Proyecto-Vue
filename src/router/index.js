import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
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
  ],
})

export default router
