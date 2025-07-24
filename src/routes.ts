import { createRouter, createWebHistory } from 'vue-router'
import TheHome from './components/TheHome.vue'
import TheLogin from './components/TheLogin.vue'

const routes = [
  { path: '/', component: TheHome },
  { path: '/login', component: TheLogin },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export { routes, router }
