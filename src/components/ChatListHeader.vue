<template>
  <div class="whatsapp-element px-2">
    <div class="icon-list d-flex justify-content-between">
      <button class="my-auto btn btn-warning" @click.prevent="signOut">
        <i class="bi bi-box-arrow-left"></i><span> Logout</span>
      </button>

      <button class="my-auto btn btn-secondary" @click.prevent="showModal2 = true">
        <i class="bi bi-envelope"></i><span> Join chat</span>
      </button>

      <button class="my-auto btn btn-primary" id="show-modal" @click.prevent="showModal = true">
        <i class="bi bi-plus-circle"></i><span> New chat</span>
      </button>
      <!--button class="my-auto mx-2 btn-icon">
        <img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="mx-2 icon"/>
      </button-->

      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <ModalComp :show="showModal" @close="showModal = false">
          <template #header>
            <h2>Create a new chat</h2>
          </template>
          <template #body>
            <CreateChat />
          </template>
        </ModalComp>
      </Teleport>

      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <ModalComp :show="showModal2" @close="showModal2 = false">
          <template #header>
            <h2>Join a chat</h2>
          </template>
          <template #body>
            <JoinChat />
          </template>
        </ModalComp>
      </Teleport>

    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import CreateChat from "@/components/CreateChat";
import ModalComp from "@/components/ModalComp";
import JoinChat from "./JoinChat.vue";

export default {
  name: "ChatListHeader",
  components: { CreateChat, ModalComp, JoinChat },
  data() {
    return {
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
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