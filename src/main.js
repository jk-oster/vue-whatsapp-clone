import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { auth, initCurrentUser, initUserChats } from "./firebase";
import "./scss/main.scss";
import { clearStore } from "@/store";

const app = createApp(App);

app.config.performance = true;
app.config.productionTip = false;
app.use(router);

app.mount("#app");

auth.onAuthStateChanged((user) => {
  console.log(user);
  if (!user) {
    router.push("/").then(() => {
      localStorage.clear();
      clearStore();
      console.log("you have been logged out");
    });
  } else {
    initCurrentUser();
    initUserChats();
    console.log("User signed in successfully");
    router.push("/chats").then(() => {
      console.log("Welcome");
    });
  }
});
