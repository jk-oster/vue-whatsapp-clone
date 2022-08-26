<template>
  <h2>Signup</h2>
  <p>Already have an account?
    <router-link to="/">Login now!</router-link>
  </p>
  <form class="form">
    <label for="username" class="required d-none">Username</label>
    <input id="username" class="form-control my-2" name="username" v-model="username" placeholder="username" type="text">
    <label for="email" class="required d-none">Email</label>
    <input id="email" class="form-control my-2" v-model="newEmail" placeholder="email address" type="email">
    <label for="password" class="required d-none">Password</label>
    <input id="password" class="form-control my-2" v-model="newPassword" placeholder="enter your password" type="password">
    <label for="confirmPassword" class="required d-none">Repeat password</label>
    <input id="confirmPassword" class="form-control my-2" v-model="repPassword" placeholder="repeat your password" type="password">
  </form>
  <button class="btn btn-primary btn-lg" @click="createAccount"><i class="bi bi-person-check"></i> Create Account</button>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import router from "@/router";
import { initCurrentUser, initUserChats } from "@/firebase";

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
