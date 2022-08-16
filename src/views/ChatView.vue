<template>
  <div class="vh-100 d-flex">

    <main class="container">
      <div class="row flex-nowrap h-100">

        <section class="col-4 border-right p-0 chatlist d-flex flex-column">

          <ChatListHeader/>

          <ChatListSearch/>

          <ChatListScroll/>

        </section>

        <section class="col-8 p-0 d-flex flex-column">

          <ChatHeader/>

          <ChatRoom/>

          <ChatFooter/>

        </section>
      </div>
    </main>
  </div>

</template>

<script>
import ChatListScroll from "@/components/ChatListScroll";
import ChatHeader from "@/components/ChatHeader";
import ChatRoom from "@/components/ChatRoom";
import ChatFooter from "@/components/ChatFooter";
import ChatListHeader from "@/components/ChatListHeader";
import ChatListSearch from "@/components/ChatListSearch";

export default {
  name: "ChatView",
  components : { ChatListScroll, ChatListHeader, ChatListSearch, ChatHeader, ChatRoom, ChatFooter }
}
</script>

<style>
.container {
  background-color: #ffffff;
}

.whatsapp-element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  background-color: var(--banner-gray);
}

.list-group-item {
  border-radius: 0 !important;
  border-right: 0;
  border-left: 0;
  border-color: var(--list-active-gray);
}

.whatsapp-element.list-group-item {
  background-color: #ffffff;
}

.list-group-item.active {
  color: #000000;
  background-color: var(--list-active-gray);
  border-color: var(--list-active-gray);
}

.img-title-element {
  display: flex;
  text-align: left;
}

.icon-list {
  display: flex;
  align-items: center;
}

.list-group-item {
  animation-name: slide-up;
  animation-duration: 2s;
}

@keyframes slide-up {
  0% {
    margin-top: 100vh;
  }
  100% {
    margin-top: 0;
  }
}

.chat_img {
  border-radius: 50%;
  margin: 10px;
  max-height: 40px;
}

.new-message {
  background-color: orange !important;
}
</style>