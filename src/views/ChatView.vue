<template>
  <div class="vh-100 d-flex">
    <main class="chat-container border">
      <section :class="classes">
        <ChatList />
      </section>

      <section
        v-if="!isMobile"
        class="col-8 p-0 d-flex flex-column border-start"
      >
        <ChatComp />
      </section>
    </main>
  </div>
</template>

<script>
import { store } from "@/store";
import { joinChat } from "@/firebase";
import router from "@/router";
import ChatList from "../components/ChatList.vue";
import ChatComp from "../components/ChatComp.vue";
import { isMobile as checkMobile } from "@/util";

export default {
  name: "ChatView",
  components: { ChatList, ChatComp },
  data() {
    return {
      isMobile: checkMobile,
      store
    };
  },
  computed: {
    classes() {
      return !this.isMobile
        ? "col-4 border-right p-0 chatlist d-flex flex-column"
        : "col-12 p-0 chatlist d-flex  flex-column";
    },
  },
  watch: {
    $route() {
      console.log(this.$route);
      this.joinChatByQueryParam();
    },
    'store.loadedChats'() {
      this.joinChatByQueryParam();
    }
  },
  methods: {
    joinChatByQueryParam() {
      console.log('check joining', this.$route)
      if (this.$route.query.join != null && store.loadedChats && !store.chats.some(chat => chat.id == this.$route.query.join)) {
        console.log('joining', this.$route)
        setTimeout(() => {
          joinChat(this.$route.query.join);
          this.$router.replace({'query': null});
        }, 500);
      }
    },
  },
  mounted() {
    if (Object.keys(store.currentUser).length === 0)
      router.push("/").then(() => {
        localStorage.clear();
        console.log("you need to login or register first!");
      });
    else {

      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        new Notification(
          "Hi there! Welcome! Push notifications are now available for you"
        );
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            if (Object.keys(store.chats).length === 0)
              new Notification("Hi there! Welcome to this Vue Chat App, its a WhatsApp Design Clone!");
            else new Notification("Hi there! Welcome back!");
          }
        });
      }
    }
  },
};
</script>
