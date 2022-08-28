<template>
  <form class="form">
    <label for="title" class="d-none">Title</label>
    <input id="title" type="text" placeholder="Chat title" v-model="title" class="form-control w-100 my-2" />

    <label for="select" class="form-label mb-1 pb-0">Select users:</label>
    <select id="select" name="select" multiple placeholder="Add users" v-model="selectedUsers"
      class="form-control form-select w-100 my-2">
      <option v-for="user in knownUsers" :value="user.id" :key="user.id">
        {{ user.name }}
      </option>
    </select>

    <div class="d-flex w-100">
      <input type="text" placeholder="userid" v-model="userId" class="form-control form-control w-60 text-input" />
      <button class="btn btn-secondary btn-sm" @click.prevent="newUser"><i class="bi bi-person-plus"></i><span> Add user</span></button>
    </div>

    <button class="btn btn-primary mt-2" @click.prevent="addChat"><i class="bi bi-plus"></i> Create chat</button>
  </form>
</template>

<script>
import { store } from "@/store";
import { addChat, getRandId } from "@/firebase";

export default {
  name: "CreateChat",
  methods: {
    addChat() {
      const timeStamp = new Date().getTime();
      const newChat = {
        id: timeStamp + '-' + store.currentUser.id + '-' + getRandId(),
        title: this.title != "" ? this.title : "Untitled Chat",
        users: this.selectedUsers ?? [store.currentUser.id],
        img: "https://picsum.photos/200",
        created: timeStamp
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
      title: "",
      userId: "",
    }
  }
}
</script>