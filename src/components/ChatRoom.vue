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
