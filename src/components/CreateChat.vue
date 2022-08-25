<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <h2>Create a new chat</h2>
        <input type="text" placeholder="Chat title"
               v-model="title"
               class="form-control form-control-sm w-100"/>
        <label for="select" class="form-label">Select users:</label>
        <select id="select" name="select"
                multiple placeholder="Add users"
                v-model="selectedUsers"
                class="form-control form-select">
          <option v-for="user in knownUsers"
                  :value="user.id"
                  :key="user.id">
            {{ user.name }}
          </option>
        </select>
        <input type="text"
               placeholder="userid"
               v-model="userId"
               class="form-control form-control-sm w-100 text-input"/>
        <button>Add user</button>
        <button type="submit" @click="addChat">Create chat</button>
        <button @click="close">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import {store} from "@/store";
import {addChat} from "@/firebase";

export default {
  name: "CreateChat",
  props: ['showCreateChat'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    },
    addChat() {
      this.$emit('close');
      const timeStamp = new Date().getTime();
      const newChat = {
        id: "chat" + timeStamp,
        title: this.title,
        users: this.selectedUsers,
        img: "https://picsum.photos/200",
        created: timeStamp
      }
      addChat(newChat);
    }
  },
  data() {
    return {
      knownUsers: store.knownUsers,
      selectedUsers: [],
      title: "",
      userId: "",
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  /* display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.create-chat {
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>