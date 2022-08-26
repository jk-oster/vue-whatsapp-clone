<template>
  <div class="vh-100 d-flex">

    <main class="chat-container border">

      <section v-if="isMobile()" class="col-12 p-0 d-flex  flex-column">

        <ChatComp/>

      </section>

    </main>

  </div>

</template>

<script>
import { store } from "@/store";
import router from "@/router";
import ChatComp from "../components/ChatComp.vue";

export default {
  name: "ChatView",
  components: { ChatComp },
  mounted() {
    if (Object.keys(store.currentUser).length === 0) router.push('/').then(() => {
      localStorage.clear()
      console.log('you need to login or register first!')
    })
    else if (!this.isMobile()) router.push('/chats');
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 768
    }
  }
}
</script>

<style>
.container {
  background-color: #ffffff;
}

.whatsapp-element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  background-color: var(--banner-gray);
}

.list-group-item {
  border-radius: 0 !important;
  border-right: 0;
  border-left: 0;
  border-color: var(--list-active-gray);
}

.whatsapp-element.list-group-item {
  background-color: #ffffff;
}

.list-group-item.active {
  color: #000000;
  background-color: var(--list-active-gray);
  border-color: var(--list-active-gray);
}

.img-title-element {
  display: flex;
  text-align: left;
}

.icon-list {
  display: flex;
  align-items: center;
}

.list-group-item {
  animation-name: slide-up;
  animation-duration: 2s;
}

@keyframes slide-up {
  0% {
    margin-top: 100vh;
  }

  100% {
    margin-top: 0;
  }
}

.chat_img {
  border-radius: 50%;
  margin: 10px;
  max-height: 40px;
}

.new-message {
  background-color: orange !important;
}
</style>