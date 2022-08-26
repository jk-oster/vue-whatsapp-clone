<template>
  <li v-bind:id="chat.id" class="list-group-item whatsapp-element" tabindex="0"
      :class="{active: active}"
      @click="switchActiveChat"
  >
    <div class="img-title-element">
      <div>
        <img class="chat_img" v-bind:src="chat.img" alt="">
      </div>
      <div class="ml-2 align-middle">
        <p class="font-weight-bold mb-0">{{ chat.title }}</p>
        <small>{{ lastMessage }}</small>
      </div>
    </div>
    <p class="mb-0">{{ lastTime }}</p>
  </li>
</template>

<script>
import {store} from '../store.js'
import {initMessages} from "@/firebase";

export default {
  name: "ChatItem",
  props: ['chat'],
  computed: {
    lastMessage() {
      return this.chat.messages[this.chat.messages.length - 1]?.text ?? 'Neuer Chat - noch keine Nachrichten'
    },
    lastTime() {
      const time = this.chat.messages[this.chat.messages.length - 1]?.time ?? '';
      if(time == '') return '**:**';
      const hours = '0' + new Date(time).getHours();
      const mins  = '0' + new Date(time).getMinutes();
      return `${hours.substring(hours.length - 2)}:${mins.substring(mins.length - 2)}`;
    }
  },
  data() {
    return {
      active: false,
      newMessage: false,
    }
  },
  methods: {
    switchActiveChat() {
      store.currentChat = this.chat;
      store.currentUsers = this.chat.users;
      initMessages();
      console.log(store)
    }
  }
}
</script>

<style scoped>

</style>