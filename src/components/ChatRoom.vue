<template>
  <div ref="chatroom" class="chatroom" scollable="true">

    <div class="top-notification" v-if="showNoMessagesYet">Write the first message</div>
    <div class="top-notification" v-if="showNoChatSelected">Select a chat to display, create <i
        class="bi bi-plus-circle"></i> one or join <i class="bi bi-envelope"></i> the global WhatsApp Clone Chat by the
      chat id:
      <code>chat1661478319744</code>
    </div>

    <MessageItem v-for="message in filteredMessages" :key="message.id" :message="message" />

  </div>

</template>

<script>
import { store } from "../store";
import MessageItem from "@/components/MessageItem";
export default {
  name: "ChatRoom",
  components: { MessageItem },
  data() {
    return {
      store
    }
  },
  computed: {
    filteredMessages() {
      return store.currentChat.messages?.filter(msg => {
        return msg.text.toLowerCase().includes(store.msgSearch?.toLowerCase() ?? '');
      }) ?? [];
    },
    showNoMessagesYet() {
      return !this.showNoChatSelected && (!this.filteredMessages || this.filteredMessages.length === 0);
    },
    showNoChatSelected() {
      return !store.currentChat || Object.keys(store.currentChat).length === 0;
    }
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
