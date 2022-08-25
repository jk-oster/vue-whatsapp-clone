<template>
  <div class="whatsapp-element">
    <div id="headerImg" class="img-title-element">
      <div>
        <img class="chat_img" v-bind:src="store.currentChat.img" alt="">
      </div>
      <div class="ml-2 align-middle">
        <p class="font-weight-bold mb-0">{{ store.currentChat.title }}</p>
        <small><span>{{ currentChatNames }}</span></small>
      </div>
    </div>
    <div class="icon-list">

      <div class="m-2 border rounded d-flex">
        <img src="../assets/search-svgrepo-com.svg" alt="" class="pl-2 icon"/>
        <input class="form-control form-control-sm w-100 border-0" type="text" placeholder="Search for message in chat">
      </div>
      <button class="my-auto mx-2 btn-icon btn-with-icon btn-with-icon-left" id="show-modal" @click="showModal = true">
        <img src="../assets/add-user-svgrepo-com.svg" alt="" class="icon"/>Add user
      </button>
      <button class="my-auto mx-2 btn-icon btn-with-icon btn-with-icon-left">
        <img src="../assets/trash-bin-svgrepo-com.svg" alt="" class="icon"/>Leave chat
      </button>

      <!--img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="icon mx-2"/-->

    </div>
  </div>


  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ModalComp :show="showModal" @close="showModal = false">
      <template #header>
        <h2>Add users to chat</h2>
      </template>
      <template #body>
        <AddUser/>
      </template>
    </ModalComp>
  </Teleport>

</template>

<script>
import {store} from '../store.js'
import ModalComp from "@/components/ModalComp";
import AddUser from "@/components/AddUser";
export default {
  name: "ChatHeader",
  components: {AddUser, ModalComp},
  computed: {
    currentChatNames() {
      return store.currentChat.users?.map(user => user.name).join(', ')
    }
  },
  data() {
    return {
      store,
      showModal: false
    }
  }
}
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  opacity: .6;
}
</style>