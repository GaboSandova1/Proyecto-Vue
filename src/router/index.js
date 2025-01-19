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
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/listaDeTareas',
      name: 'lista-de-tareas',
      component: () => import('../components/listaDeTareas.vue'),
    },
    {
      path: '/sideBar',
      name: 'SideBar',
      component: () => import('../components/sideBar.vue'),
    },
  ],
})

export default router
