<template>
  <div v-bind:id="message.id" class="message" :class="message.userId === userId ? 'out' : 'in'">
    <div>
      <div>
        <b>{{ userName }}</b><br>{{ message.text }}
      </div>
      <div class="time">
        {{ message.time}}
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "../store.js"
export default {
  name: "MessageItem",
  data() {
    return {
      userId: store.currentUser.id,
      userName: store.currentChat.users.filter(user => user.id === this.message.userId)[0].name,
    }
  },
  props: ['message'],
}
</script>

<style scoped>
.chatroom {
  background-color: var(--beige);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.message {
  display: flex;
  max-width: 80%;
  position: relative;
}

.message > div{
  background-color: var(--message-green);
  border-radius: .5em;
  margin: 1em 2em;
  padding: 1em;
  text-align: left;
}

.message > div::before {
  content: '';
  border-style: solid;
  border-width: 18px 18px 0 0;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  right: 14px;
  top: 14px;
}

.message.out > div::before {
  border-color: var(--message-green) transparent transparent transparent;
  left: 14px;
  right: initial;
  transform: rotate(90deg);
}

.message.in {
  justify-content: flex-end;
  margin-left: auto;

}

.message.in > div {
  background-color: #fff;
}

.time {
  text-align: right;
  font-size: .65em;
}

.message {
  animation-name: fade-in;
  animation-duration: 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>