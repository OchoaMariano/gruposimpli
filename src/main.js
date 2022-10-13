import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import Esp from './locales/Esp.json'
import Eng from './locales/Eng.json'
import Por from './locales/Por.json'
import './assets/main.css'

const i18n = createI18n({
   // something vue-i18n options here ...
  legacy: false,
  globalInjection: true,
  locale: 'Esp',
  fallbackLocale: 'Esp',
  messages: {
    Esp,
    Eng,
    Por
  } 
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
