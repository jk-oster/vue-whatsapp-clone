<template>
  <div class="vh-100 d-flex">

    <main class="chat-container border">

      <section :class="classes">

        <ChatList />

      </section>

      <section v-if="!isMobile()" class="col-8 p-0 d-flex flex-column border-start">

        <ChatComp />

      </section>

    </main>

  </div>

</template>

<script>
import { store } from "@/store";
import router from "@/router";
import ChatList from "../components/ChatList.vue";
import ChatComp from "../components/ChatComp.vue";

export default {
  name: "ChatView",
  components: { ChatList, ChatComp },
  computed: {
    classes() {
      return !this.isMobile() ? 'col-4 border-right p-0 chatlist d-flex flex-column' : 'col-12 p-0 chatlist d-flex  flex-column'
    }
  },
  mounted() {
    if (Object.keys(store.currentUser).length === 0) router.push('/').then(() => {
      localStorage.clear()
      console.log('you need to login or register first!')
    })
    else {
      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        new Notification("Hi there! Welcome! Push notifications are now available for you");
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            if (Object.keys(store.currentChats).length === 0) new Notification("Hi there! Welcome to this WhatsApp Clone app!");
            else new Notification("Hi there! Welcome back!");
          }
        });
      }
    }
  },
  methods: {
    isMobile() {
      console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 768)
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 768
    }
  }
}
</script>
