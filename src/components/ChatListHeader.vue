<template>
  <div class="whatsapp-element">
    <div class="icon-list d-flex justify-content-between">
      <button class="my-auto mx-2 btn-icon" @click="signOut">
        <img src="../assets/logout-svgrepo-com.svg" alt="" class="mx-2 icon "/>Logout
      </button>
      <button class="my-auto mx-2 btn-icon" id="show-modal" @click="showModal = true">
        <img src="../assets/add-svgrepo-com.svg" alt="" class="mx-2 icon"/>New chat
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
            <CreateChat/>
          </template>
        </ModalComp>
      </Teleport>

    </div>
  </div>
</template>

<script>
import {auth} from "@/firebase";
import CreateChat from "@/components/CreateChat";
import ModalComp from "@/components/ModalComp";

export default {
  name: "ChatListHeader",
  components: {CreateChat, ModalComp},
  data() {
    return {
      showModal: false,
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