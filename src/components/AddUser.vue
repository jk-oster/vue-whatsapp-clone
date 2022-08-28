<template>
  <form class="form">
    <label for="select" class="form-label">Select users:</label>
    <select id="select" name="select" multiple placeholder="Add users" v-model="selectedUsers"
      class="form-control form-select  my-2">
      <option v-for="user in knownUsers" :value="user.id" :key="user.id">
        {{ user.name }}
      </option>
    </select>

    <div class="d-flex w-100  my-2">
      <input type="text" placeholder="userid" v-model="userId" class="form-control form-control-sm w-60 text-input" />
      <button class="btn btn-secondary btn-sm" @click.prevent="newUser"><i class="bi bi-person-plus"></i><span> Add by
          user id</span></button>
    </div>

    <button class="btn btn-primary" @click.prevent="addUser"><i class="bi bi-people-fill"></i> Add selected users to
      chat</button>
  </form>

</template>

<script>
import { store } from "@/store";
import { addChat, getRandId } from "@/firebase";

export default {
  name: "AddUser",
  methods: {
    addUser() {
      const timeStamp = new Date().getTime();
      const users = [
        ...this.selectedUsers, 
        ...store.currentChat.users?.map(user => user.id)].filter(userid => !this.selectedUsers.includes(userid));
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