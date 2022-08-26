import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {auth} from './firebase'
import "./scss/main.scss"
import {store} from "@/store";

const app = createApp(App)

app.config.performance = true
app.config.productionTip = false
app.use(router)

app.mount('#app')

auth.onAuthStateChanged(async () => {
    if (!auth.currentUser) {
        router.push('/').then(() => {
            localStorage.clear()
            store.currentUser = {}
            store.knownUsers = {}
            store.chats = []
            store.currentChat= {}
            console.log('you have been logged out')
        })
    }
})