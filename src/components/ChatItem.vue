<template>
  <li v-bind:id="chat.id" class="list-group-item whatsapp-element" tabindex="0"
    :class="{ 'active': chat.active, 'new-message': chat.newMessage }" @click="switchActiveChat"
    @keyup.enter="switchActiveChat">
    <div class="img-title-element">
      <div class="notification"><span>{{ chat.newMessage > 0 ? chat.newMessage : '' }}</span></div>
      <div>
        <img class="chat_img" v-bind:src="chat.img" alt="">
      </div>
      <div class="ml-2 align-items-center">
        <p class="mb-0"><b>{{ chat.title }}</b></p>
        <small>{{ lastMessage }}</small>
      </div>
    </div>
    <p class="mb-0">{{ lastTime }}</p>
  </li>
</template>

<script>
import { store } from '../store.js'
// import {initMessages} from "@/firebase";
import router from "@/router";
import { isMobile } from '@/util';

export default {
  name: "ChatItem",
  props: ['chat'],
  computed: {
    lastMessage() {
      return this.chat.messages[this.chat.messages.length - 1]?.text ?? 'Neuer Chat - noch keine Nachrichten'
    },
    lastTime() {
      const time = this.chat.messages[this.chat.messages.length - 1]?.time ?? '';
      if (time == '') return '**:**';
      const hours = '0' + new Date(time).getHours();
      const mins = '0' + new Date(time).getMinutes();
      return `${hours.substring(hours.length - 2)}:${mins.substring(mins.length - 2)}`;
    },
    isMobile() {
      return isMobile();
    }
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    switchActiveChat() {
      store.currentChat = this.chat;
      console.log(this.chat);
      store.currentChat.newMessage = 0;
      store.chats.forEach(chat => chat.active = false);
      // store.chats.filter(chat => store.currentChat.id === chat.id)[0].active = true;
      store.currentChat.active = true;
      store.currentUsers = this.chat.users;
      if (isMobile()) {
        router.push('/mobile');
      }
    },
  }
}
</script>