<template>
  <div class="m-2 d-flex">
    <!--svg class="my-auto mx-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
         height="24">
      <path opacity=".45" fill="#263238"
            d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
    </svg-->
    <!--input type="text" id="inputMsg" class="form-control form-control-sm w-100"
           placeholder="Schreibe eine Nachricht"-->
    <span contenteditable="true" class="form-control form-control-sm w-100 text-input" scrollable="true"
    @keyup.enter="sendMessage" @input="onInput">{{ message }}</span>

    <button class="my-auto mx-2 btn-icon" @click="sendMessage">
      <img class="icon" src="../assets/send-svgrepo-com.svg" alt="Send message"/>
    </button>
  </div>
</template>

<script>
import {store} from "../store";

export default {
  name: "ChatFooter",
  data() {
    return {
      message: "Write to chat"
    }
  },
  methods: {
    onInput(e) {
      this.message = e.target.innerText
    },
    sendMessage() {
      if(this.message !== "") {
        const newMessage = {
          id: '',
          userId: store.currentUser.id,
          text: this.message,
          time: Date.now().toString()
        }
        store.currentChat.messages = [...store.currentChat.messages, newMessage]
        this.message = "";
      }
    }
  }
}
</script>

<style scoped>
.btn-icon {
  all: unset;
  border: none;
}
.btn-icon:focus {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}
.icon {
  width: 24px;
  height: 24px;
  opacity: .6;
}
.text-input {
  display: inline-block;
  height: fit-content;
  max-height: 20vh;
  overflow-y: auto;
  overflow-x: clip;
}
</style>