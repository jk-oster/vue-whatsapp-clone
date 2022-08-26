<template>
  <div ref="chatroom" class="chatroom"  scollable="true">

    <MessageItem v-for="message in filteredMessages" :key="message.id" :message="message"/>

  </div>

</template>

<script>
import {store } from "../store";
import MessageItem from "@/components/MessageItem";
export default {
  name: "ChatRoom",
  components: {MessageItem},
  data() {
    return {
      store
    }
  },
  computed: {
    filteredMessages(){
      return store.currentChat.messages?.filter(msg => {
        return msg.text.toLowerCase().includes(store.msgSearch?.toLowerCase() ?? '');
        }) ?? [];
    },
  },
  mounted() {
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      const chatroom = this.$refs.chatroom;
      chatroom.scrollTop = chatroom.scrollHeight;
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

.message {
  display: flex;
  max-width: 80%;
  position: relative;
}

.message > div{
  background-color: var(--message-green);
  border-radius: .5em;
  margin: 1em 2em;
  padding: 1em;
  text-align: left;
}

.message > div::before {
  content: '';
  border-style: solid;
  border-width: 18px 18px 0 0;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  right: 14px;
  top: 14px;
}

.message.out > div::before {
  border-color: var(--message-green) transparent transparent transparent;
  left: 14px;
  right: initial;
  transform: rotate(90deg);
}

.message.in {
  justify-content: flex-end;
  margin-left: auto;

}

.message.in > div {
  background-color: #fff;
}

.time {
  text-align: right;
  font-size: .65em;
}

.message {
  animation-name: fade-in;
  animation-duration: 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>