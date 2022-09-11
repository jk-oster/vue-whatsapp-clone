<template>
  <h2>Login</h2>
  <p>Don't have an account?
    <router-link to="/createAccount">Create an account</router-link>
    it takes less than a minute
  </p>
  <form class="inputs form">
    <label for="email" class="required d-none">Email</label>
    <input id="email" class="form-control my-2" v-model="email" placeholder="enter your email address" type="email">
    <div v-if="emailError" class="alert alert-danger" role="alert">
      {{ emailError }}
    </div>
    <label for="password" class="required d-none">Password</label>
    <input id="password" class="form-control my-2" v-model="password" placeholder="enter your password" type="password">
    <div v-if="passwordError" class="alert alert-danger" role="alert">
      <span v-html="passwordError"></span>
    </div>
  </form>
  <div class="remember-me--forget-password">
    <p>Forgot your password?</p>
  </div>
  <button @click="emailLogin" class="btn btn-primary"><i class="bi bi-box-arrow-in-right"></i> Login with
    email</button>
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
      errorCode: "",
    }
  },

  computed: {
    emailError() {
      switch (this.errorCode) {
        case "auth/invalid-email":
          return "Please enter a valid email address";
        case "noEmail":
          return "Please enter your email";
        default:
          return '';
      }
    },
    passwordError() {
      switch (this.errorCode) {
        case "auth/invalid-password":
          return "Your password is incorrect";
        case "noPassword":
          return "Please enter your password";
        case "auth/wrong-password":
          return "Please check your password and try again";
        case "auth/internal-error":
          return "Internal server error - We are sorry, your request could not be processed! Plase try again or <a href='https://jkoster.com/contact'>contact me for support</a>";
        default:
          return '';
      }
    }
  },

  methods: {
    emailLogin() {
      const auth = getAuth();
      if(this.email && this.password) {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.errorCode = "Success";
          initCurrentUser();
          initUserChats();
          console.log("User signed in successfully");
          router.push('/chats').then(() => {
            console.log('Welcome')
          })
        })
        .catch((error) => {
          console.error(error.message)
          this.errorCode = error.code;
          this.password = "";
        });
      }
      else {
        if(!this.password) this.errorCode = "noPassword";
        if(!this.email) this.errorCode = "noEmail";
        this.password = "";
      }
    }
  }
}

</script>