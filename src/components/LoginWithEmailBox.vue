<template>
  <h2>Login</h2>
  <p>Don't have an account?
    <router-link to="/createAccount">Create an account</router-link>
    it takes less than a minute
  </p>
  <form class="inputs form">
    <label for="email" class="required d-none">Email</label>
    <input id="email" class="form-control my-2" v-model="email" placeholder="enter your email address" type="email">
    <label for="password" class="required d-none">Password</label>
    <input id="password" class="form-control my-2" v-model="password" placeholder="enter your password" type="password">
  </form>
  <div class="remember-me--forget-password">
    <p>Forgot your password?</p>
  </div>
  <button @click="emailLogin" class="btn btn-primary btn-lg"><i class="bi bi-box-arrow-in-right"></i> Login with email</button>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import router from "@/router";
import { initCurrentUser, initUserChats } from "@/firebase";

export default {
  name: "LoginWithEmailBox",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    emailLogin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          initCurrentUser();
          initUserChats();
          console.log("User signed in successfully");
          router.push('/chats').then(() => {
            console.log('Welcome')
          })
        })
        .catch((error) => {
          console.error(error)
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    }
  }
}
</script>