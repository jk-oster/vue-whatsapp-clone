<template>
      <form>
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
        <button class="btn btn-alt" @click="newUser">Add user</button>
        <button class="btn btn-primary" @click="addChat">Create chat</button>
      </form>
</template>

<script>
import {store} from "@/store";
import {addChat, getRandId} from "@/firebase";

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