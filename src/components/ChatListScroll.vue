<template>
  <ul class="list-group border-top" scollable="true">
    <ChatItem v-for="chat in filteredChats" :key="chat.id" :chat="chat"/>
  </ul>
</template>

<script>
import {store} from '../store.js'
import ChatItem from "@/components/ChatItem";


export default {
  name: "ChatListScroll",
  components: {ChatItem},
  computed: {
    filteredChats(){
      return store.chats?.filter(chat => {
        return chat.title.toLowerCase().includes(store.chatSearch?.toLowerCase() ?? '');
        }) ?? [];
    },
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
.list-group {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>