<template>
  <div class="whatsapp-element">
    <div id="headerImg" class="img-title-element">
      <div>
        <img class="chat_img" v-bind:src="store.currentChat.img" alt="">
      </div>
      <div class="ml-2 align-middle">
        <p class="font-weight-bold mb-0">{{ store.currentChat.title }}</p>
        <small><span>{{ store.currentChat.users?.map(user => user.name).join(', ') }}</span></small>
      </div>
    </div>
    <div class="icon-list">

      <img src="../assets/search-svgrepo-com.svg" alt="" class="icon mx-2"/>
      <img src="../assets/paperclip-svgrepo-com.svg" alt="" class="icon mx-2"/>
      <img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="icon mx-2"/>

    </div>
  </div>
</template>

<script>
import {store} from '../store.js'
export default {
  name: "ChatHeader",
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  opacity: .6;
}
</style>