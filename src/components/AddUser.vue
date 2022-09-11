<template>
  <form class="form">
    <label for="select" class="form-label">Select users:</label>
    <!-- <select id="select" name="select" multiple placeholder="Add users" v-model="selectedUsers"
      class="form-control form-select  my-2">
      <option v-for="user in knownUsers" :value="user.id" :key="user.id">
        {{ user.name }}
      </option>
    </select> -->
    <div v-for="user in store.knownUsers" :key="user.id" class="form-check">
      <input type="checkbox" :value="user.id" :id="user.id" v-model="selectedUsers" class="form-check-input" />
      <label :for="user.id" class="form-check-label">{{ user.name }}</label>
    </div>
    <button class="btn btn-primary mb-2" @click.prevent="addUser"><i class="bi bi-people-fill"></i> Add selected users
      to chat</button>
    <hr />
    <label for="userId" class="form-label mt-2 pb-0 w-100">Add user by ID to known contacts</label>
    <div class="d-flex w-100 my-2">
      <input id="userId" type="text" placeholder="userid" v-model="userId"
        class="form-control form-control-sm text-input" />
      <button class="btn btn-secondary btn-sm" @click.prevent="newUser"><i class="bi bi-person-plus"></i><span> Add
          user</span></button>
    </div>

  </form>

</template>

<script>
import { store } from "@/store";
import { addChat, getRandId, getUserData } from "@/firebase";

export default {
  name: "AddUser",
  data() {
    return {
      store,
      selectedUsers: [],
      userId: "",
    }
  },
  methods: {
    addUser() {
      const timeStamp = new Date().getTime();
      const users = [
        ...new Set([
          ...this.selectedUsers,
          ...store.currentChat.users?.map(user => user.id)
        ])];
      const newChat = {
        id: store.currentChat.id ?? timeStamp + '-' + store.currentUser.id + '-' + getRandId(),
        title: store.currentChat.title ?? "Untitled",
        users: users,
        img: store.currentChat.img ?? "https://picsum.photos/200",
        created: store.currentChat.created ?? timeStamp
      }
      console.log(newChat);
      addChat(newChat);
      this.$emit('close');
    },
    newUser() { // TODO: add email address support
      if(!store.knownUsers[this.userId]){
        getUserData(this.userId).then(user => {
          store.knownUsers[this.userId] = user;
        });
        this.$emit('close');
      }
    }
  },
}
</script>