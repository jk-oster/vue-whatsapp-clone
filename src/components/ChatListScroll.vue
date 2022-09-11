<template>
  <ul class="list-group border-top" scollable="true">
    <content-loader v-if="showContentLoader" speed="1" animate="true" viewBox="0 0 470 600" backgroundColor="#bdbdbd"
      foregroundColor="#dedede">
      <rect x="85" y="32" rx="3" ry="3" width="184" height="16" />
      <rect x="398" y="44" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="93" rx="3" ry="3" width="470" height="1" />
      <rect x="1" y="2" rx="3" ry="3" width="472" height="1" />
      <rect x="85" y="54" rx="3" ry="3" width="226" height="8" />
      <circle cx="45" cy="48" r="24" />
      <rect x="86" y="125" rx="3" ry="3" width="184" height="16" />
      <rect x="399" y="137" rx="3" ry="3" width="52" height="6" />
      <rect x="1" y="186" rx="3" ry="3" width="470" height="1" />
      <rect x="86" y="147" rx="3" ry="3" width="226" height="8" />
      <circle cx="46" cy="141" r="24" />
      <rect x="87" y="218" rx="3" ry="3" width="184" height="16" />
      <rect x="400" y="230" rx="3" ry="3" width="52" height="6" />
      <rect x="2" y="279" rx="3" ry="3" width="470" height="1" />
      <rect x="87" y="240" rx="3" ry="3" width="226" height="8" />
      <circle cx="47" cy="234" r="24" />
      <rect x="87" y="314" rx="3" ry="3" width="184" height="16" />
      <rect x="400" y="326" rx="3" ry="3" width="52" height="6" />
      <rect x="2" y="375" rx="3" ry="3" width="470" height="1" />
      <rect x="87" y="336" rx="3" ry="3" width="226" height="8" />
      <circle cx="47" cy="330" r="24" />
      <rect x="88" y="409" rx="3" ry="3" width="184" height="16" />
      <rect x="401" y="421" rx="3" ry="3" width="52" height="6" />
      <rect x="3" y="470" rx="3" ry="3" width="470" height="1" />
      <rect x="88" y="431" rx="3" ry="3" width="226" height="8" />
      <circle cx="48" cy="425" r="24" />
    </content-loader>
    <ChatItem v-for="chat in filteredChats" :key="chat.id" :chat="chat" />
  </ul>
</template>

<script>
import { store } from '../store.js'
import ChatItem from "@/components/ChatItem";
import { ContentLoader } from "vue-content-loader";


export default {
  name: "ChatListScroll",
  components: { ChatItem, ContentLoader },
  computed: {
    showContentLoader() {
      return !this.filteredChats || this.filteredChats.length <= 0;
    },
    filteredChats() {
      return store.chats?.filter(chat => {
        return chat.title.toLowerCase().includes(store.chatSearch?.toLowerCase() ?? '') ||
          chat.users.join('').toLowerCase().includes(store.chatSearch?.toLowerCase() ?? '')
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