import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/homeView.vue'

const routes = [
    {
      path: '/',
      name: 'home', 
      component: HomeView
    },
  ]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})