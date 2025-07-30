import { createRouter, createWebHistory } from 'vue-router'
import TheHome from './components/TheHome.vue'
import TheLogin from './components/TheLogin.vue'
import TheSignup from './components/TheSignup.vue'
import HotelWizard from './components/HotelWizard.vue'

const routes = [
  { path: '/', component: TheHome, name: 'home' },
  { path: '/login', component: TheLogin, name: 'login' },
  { path: '/signup', component: TheSignup, name: 'signup' },
  { path: '/wizard-hotel', component: HotelWizard, name: 'wizard-hotel' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export { routes, router }
