<template>
        <ChatListHeader />

        <ChatListSearch />

        <ChatListScroll />

</template>

<script>
import ChatListScroll from "@/components/ChatListScroll";
import ChatListHeader from "@/components/ChatListHeader";
import ChatListSearch from "@/components/ChatListSearch";

export default {
  name: "ChatList",
  components: { ChatListScroll, ChatListHeader, ChatListSearch },
}
</script>