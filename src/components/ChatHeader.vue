<template>
  <div class="whatsapp-element">


    <div id="headerImg" class="img-title-element">
      <router-link v-if="isMobile" to="/chats" class="btn-back btn btn-icon-only" tabindex="1">
        <i class="bi bi-caret-left"></i><span> Back</span>
      </router-link>
      <div>
        <img class="chat_img" :src="store.currentChat.img" alt="">
      </div>
      <div class="ml-2 align-middle">
        <p class="mb-0"><b>{{ store.currentChat.title }}</b></p>
        <small><span>{{ currentChatNames }}</span></small>
      </div>
    </div>

    <div class="icon-list">
      <div class="m-2 rounded d-flex">
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input class="form-control form-control-sm w-100 border-0" type="text" placeholder="Search for message..."
          v-model="search" @input="store.msgSearch = search">
      </div>
      <button class="my-auto mx-2 btn btn-secondary" id="show-modal" @click="showModal = true">
        <i class="bi bi-person-plus"></i><span> Add user</span>
      </button>

      <button class="my-auto mx-2 btn btn-danger" @click="leaveChat">
        <i class="bi bi-door-open"></i><span> Leave chat</span>
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
        <AddUser />
      </template>
    </ModalComp>
  </Teleport>

</template>

<script>
import { store } from '../store.js'
import ModalComp from "@/components/ModalComp";
import AddUser from "@/components/AddUser";
import { leaveChat } from '@/firebase';
import { isMobile } from "@/util"
export default {
  name: "ChatHeader",
  components: { AddUser, ModalComp },
  computed: {
    currentChatNames() {
      return store.currentChat.users?.map(user => user.name).join(', ')
    },
    isMobile() {
      return isMobile()
    }
  },
  data() {
    return {
      store,
      showModal: false,
      search: '',
    }
  },
  methods: {
    leaveChat() {
      const chat = store.currentChat;
      chat.users = chat.users.filter(id => store.currentUser.id !== id);
      leaveChat(chat);
      store.currentChat = {};
    },
  }
}
</script>