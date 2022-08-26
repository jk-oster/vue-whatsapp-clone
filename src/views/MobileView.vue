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