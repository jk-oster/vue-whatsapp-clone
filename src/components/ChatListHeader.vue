<template>
  <div class="whatsapp-element">
    <div class="icon-list d-flex justify-content-between">
      <button class="my-auto mx-2 btn-icon" @click="signOut">
        <img src="../assets/logout-svgrepo-com.svg" alt="" class="mx-2 icon "/>
      </button>
      <button class="my-auto mx-2 btn-icon" @click="toggleCreateChat">
        <img src="../assets/add-user-svgrepo-com.svg" alt="" class="mx-2 icon"/>
      </button>
      <button class="my-auto mx-2 btn-icon">
        <img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="mx-2 icon"/>
      </button>

      <CreateChat v-if="showCreateChat" @close="toggleCreateChat"/>

    </div>
  </div>
</template>

<script>
import {auth} from "@/firebase";
import CreateChat from "@/components/CreateChat";

export default {
  name: "ChatListHeader",
  components: {CreateChat},
  data() {
    return {
      showCreateChat: false,
    }
  },
  methods: {
    toggleCreateChat() {
      this.showCreateChat = !this.showCreateChat;
    },
    signOut() {
      auth.signOut();
    }
  }
}
</script>

<style scoped>
.btn-icon {
  height: fit-content;
  background: transparent;
  border: none;
}

.icon-list {
  width: 100%;
}

.icon {
  width: 20px;
  height: 20px;
  opacity: .6;
}
</style>