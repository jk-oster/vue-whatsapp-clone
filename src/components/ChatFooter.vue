<template>
  <div class="m-2 d-flex">
    <textarea class="form-control form-control-sm w-100 text-input" multiline placeholder="Send a message..."
      v-model="input" :disabled="disabled" @keyup.enter.exact="sendMessage"></textarea>
    <button class="my-auto mx-2 btn-icon btn-icon-only" :disabled="disabled" @click="sendMessage">
      <i class="bi bi-send"></i><span>Send</span>
    </button>
  </div>
</template>

<script>
import { store } from "../store";
import { addMessage } from "@/firebase";

export default {
  name: "ChatFooter",
  data() {
    return {
      input: "",
    }
  },
  computed: {
    disabled() {
      return Object.keys(store.currentChat).length === 0
    }
  },
  methods: {
    sendMessage() {
      console.log(this.input !== "")
      console.log(this.input);
      if (this.input !== "") {

        const timeStamp = new Date().getTime();
        const newMessage = {
          id: 'msg' + timeStamp,
          userId: store.currentUser.id,
          text: this.input,
          time: timeStamp
        }
        addMessage(newMessage, store.currentChat.id)
        // store.currentChat.messages = [...store.currentChat.messages, newMessage]
        this.input = "";
      }
    }
  }
}
</script>