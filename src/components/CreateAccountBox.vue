<template>
  <h2>Signup</h2>
  <p>Already have an account?
    <router-link to="/">Login now!</router-link>
  </p>
  <form>
    <input
        v-model="username"
        placeholder="username"
        type="text"
    >
    <input
        v-model="newEmail"
        placeholder="email address"
        type="email"
    >
    <input
        v-model="newPassword"
        placeholder="enter your password"
        type="password"
    >
    <input
        v-model="repPassword"
        placeholder="repeat your password"
        type="password"
    >
  </form>
  <button @click="createAccount">Create Account</button>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import router from "@/router";
import {initCurrentUser, initUserChats} from "@/firebase";

export default {
  name: "CreateAccountBox",
  data() {
    return {
      username: "",
      newEmail: "",
      newPassword: "",
      repPassword: "",
    }
  },
  methods: {
    createAccount() {
      if (this.newPassword === this.repPassword) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.newEmail, this.newPassword)
            .then(async () => {
              initCurrentUser(this.username);
              initUserChats();
              router.push('/chats').then(() => {
                console.log('Welcome')
              })
            })
            .catch((error) => {
              console.error(error)
              // const errorCode = error.code;
              // const errorMessage = error.message;
              // ..
            })
      } else {
        console.error("Passwords do not match");
      }
    },
  }
}
</script>
