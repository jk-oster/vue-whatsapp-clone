<template>
  <li v-bind:id="chat.id" class="list-group-item whatsapp-element"
      :class="active ? 'active' : ''"
      @click="showChat"
  >
    <div class="img-title-element">
      <div>
        <img class="chat_img" v-bind:src="chat.img" alt="">
      </div>
      <div class="ml-2 align-middle">
        <p class="font-weight-bold mb-0">{{ chat.title }}</p>
        <small>{{ chat.messages[chat.messages.length - 1]?.text ?? '** Neuer Chat **' }}</small>
      </div>
    </div>
    <p class="mb-0">{{ chat.messages[chat.messages.length - 1]?.time ?? '' }}</p>
  </li>
</template>

<script>
import {store} from '../store.js'

export default {
  name: "ChatItem",
  data() {
    return {
      active: false,
      newMessage: false,
    }
  },
  props: ['chat'],
  methods: {
    showChat() {
      store.currentChat = this.chat;
      store.currentUsers = this.chat.users;
      console.log(store)
    }
  }
}
</script>

<style scoped>

</style>