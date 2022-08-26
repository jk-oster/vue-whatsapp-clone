<template>
  <form class="form">
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
    <button class="btn btn-secondary" @click.prevent="newUser">Add new user</button>
    <button class="btn btn-primary" @click.prevent="addUser">Add selected users to chat</button>
  </form>

</template>

<script>
import {store} from "@/store";
import {addChat, getRandId} from "@/firebase";

export default {
  name: "AddUser",
  methods: {
    addUser() {
      const timeStamp = new Date().getTime();
      const users = [...this.selectedUsers, ...store.currentChat.users?.map(user => user.id)].filter((v, i, a) => a.indexOf(v) === i);
      const newChat = {
        id: store.currentChat.id ?? timeStamp + '-' + store.currentUser.id + '-' + getRandId(),
        title: store.currentChat.title ?? "Untitled",
        users: users,
        img: "https://picsum.photos/200",
        created: store.currentChat.created ?? timeStamp
      }
      console.log(newChat);
      addChat(newChat);
      this.$emit('close');
    },
    newUser() {
      this.knownUsers = [...this.knownUsers, this.userId];
    }
  },
  data() {
    return {
      knownUsers: store.knownUsers,
      selectedUsers: [],
      userId: "",
    }
  }
}
</script>