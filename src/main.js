import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VuePancakeIcons from "vue-pancake-icons"


const app = createApp(App)
app.use(VuePancakeIcons)
app.mount('#app')
