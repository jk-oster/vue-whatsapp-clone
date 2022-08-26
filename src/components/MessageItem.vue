<template>
  <div v-bind:id="message.id" class="message" :class="messageInOut">
    <div>
      <div class="text">
        <b>{{ userName }}</b>
        <br>
        {{ message.text }}
      </div>
      <div class="time">
        <small>{{ time }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "../store.js"
export default {
  name: "MessageItem",
  props: ['message'],
  computed: {
    messageInOut() {
      return this.message.userId === store.currentUser.id ? 'in' : 'out';
    },
    userName() {
      return store.currentChat.users.filter(user => user.id === this.message?.userId)[0].name ?? '';
    },
    time() {
      const hours = '0' + new Date(this.message.time).getHours();
      const mins  = '0' + new Date(this.message.time).getMinutes();
      return `${hours.substring(hours.length - 2)}:${mins.substring(mins.length - 2)}`;
    }
  }
}
</script>

<style scoped>
.chatroom {
  background-color: var(--beige);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}



</style>