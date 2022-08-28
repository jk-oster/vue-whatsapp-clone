<template>

    <ChatHeader />

    <ChatRoom />

    <ChatFooter />

</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatRoom from "@/components/ChatRoom";
import ChatFooter from "@/components/ChatFooter";

export default {
    name: "ChatComp",
    components: { ChatHeader, ChatRoom, ChatFooter },
}
</script>