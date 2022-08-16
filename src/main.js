import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {auth} from './firebase'
import "./scss/main.scss"

const app = createApp(App)

app.config.performance = true
app.config.productionTip = false
app.use(router)

app.mount('#app')

auth.onAuthStateChanged(async () => {
    if (!auth.currentUser) {
        router.push('/').then(() => {
            localStorage.clear()
            console.log('you have been logged out')
        })
    }
})