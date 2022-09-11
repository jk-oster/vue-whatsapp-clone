<template>
  <div class="vh-100 d-flex">

    <main class="chat-container border">

      <section v-if="isMobile" class="col-12 p-0 d-flex  flex-column">

        <ChatComp />

      </section>

    </main>

  </div>

</template>

<script>
import { store } from "@/store";
import router from "@/router";
import ChatComp from "../components/ChatComp.vue";
import { isMobile as checkMobile } from "@/util";

export default {
  name: "ChatView",
  components: { ChatComp },
  data() {
    return {
      isMobile: checkMobile
    }
  },
  mounted() {
    if (Object.keys(store.currentUser).length === 0) router.push('/').then(() => {
      localStorage.clear()
      console.log('you need to login or register first!')
    })
    else if (!this.isMobile) router.push('/chats');
  },
}
</script>