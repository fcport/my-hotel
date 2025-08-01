import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(pinia)

app.mount('#app')
