<template>
  <form class="form">
    <label for="title" class="d-none">Title</label>
    <input id="title" type="text" placeholder="Chat title" v-model="title" class="form-control w-100 my-2" />

    <label for="select" class="form-label mb-1 pb-0">Select users from known contacts:</label>
    <!-- <select id="select" name="select" multiple placeholder="Add users" v-model="selectedUsers"
      class="form-control form-select w-100 my-2">
      <option v-for="user in knownUsers" :value="user.id" :key="user.id">
        {{ user.name }}
      </option>
    </select> -->
    <div v-for="user in knownUsers" :key="user.id" class="form-check">
      <input type="checkbox" :value="user.id" :id="user.id" v-model="selectedUsers" class="form-check-input"/>
      <label :for="user.id" class="form-check-label">{{ user.name}}</label>
    </div>
    <button class="btn btn-primary mb-2" @click.prevent="addChat"><i class="bi bi-plus"></i> Create chat</button>

    <hr/>
    <label for="userId" class="form-label  mt-2 pb-0 w-100">Add user by ID to known contacts</label>
    <div class="d-flex w-100">
      <input id="userId" type="text" placeholder="userid" v-model="userId" class="form-control form-control text-input" />
      <button class="btn btn-secondary btn-sm" @click.prevent="newUser"><i class="bi bi-person-plus"></i><span> Add user</span></button>
    </div>

  </form>
</template>

<script>
import { store } from "@/store";
import { addChat, getRandId, getUserData } from "@/firebase";

export default {
  name: "CreateChat",
  methods: {
    addChat() {
      const timeStamp = new Date().getTime();
      const newChat = {
        id: timeStamp + '-' + store.currentUser.id + '-' + getRandId(),
        title: this.title != "" ? this.title : "Untitled Chat",
        users: this.selectedUsers.length > 0 ? this.selectedUsers : [store.currentUser.id],
        img: "https://picsum.photos/200",
        created: timeStamp
      }
      console.log(newChat);
      addChat(newChat);
      this.$emit('close');
    },
    newUser() {
      if(!store.knownUsers[this.userId]){
        getUserData(this.userId).then(user => {
          store.knownUsers[this.userId] = user;
        });
        this.$emit('close');
      }
      // this.knownUsers = [...this.knownUsers, this.userId];
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
  option:checked, option:active, option:focus, option:target {
    background-color: greenyellow;
  }
</style>