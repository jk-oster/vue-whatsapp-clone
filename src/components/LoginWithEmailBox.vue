<template>
  <h2>Login</h2>
  <p>Don't have an account?
    <router-link to="/createAccount">Create an account</router-link>
    it takes less than a minute
  </p>
  <form class="inputs">
    <input
        v-model="email"
        placeholder="enter your email address"
        type="email"
    >
    <input
        v-model="password"
        placeholder="enter your password"
        type="password"
    >
  </form>

  <div class="remember-me--forget-password">
    <p>Forgot your password?</p>
  </div>
  <button @click="emailLogin" class="btn btn-primary btn-with-icon-left"><img class="icon icon-white" src="../assets/login-svgrepo-com.svg" alt="">Login with email</button>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import router from "@/router";
import {initCurrentUser, initUserChats} from "@/firebase";

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