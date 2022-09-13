import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./scss/main.scss"

const app = createApp(App)
app.config.globalProperties.window  = window;
app.config.performance = true
app.config.productionTip = false
app.use(router)

app.mount('#app')