<template>
  <h2>Signup</h2>
  <p>Already have an account?
    <router-link to="/">Login now!</router-link>
  </p>
  <form class="form">
    <label for="username" class="required d-none">Username</label>
    <input id="username" class="form-control my-2" name="username" v-model="username" placeholder="username"
      type="text">
    <label for="email" class="required d-none">Email</label>
    <input id="email" class="form-control my-2" v-model="newEmail" placeholder="email address" type="email">
    <div v-if="emailError" class="alert alert-danger" role="alert">
      {{ emailError }}
    </div>
    <label for="password" class="required d-none">Password</label>
    <input id="password" class="form-control my-2" v-model="newPassword" placeholder="enter your password"
      type="password">
    <div v-if="passwordError" class="alert alert-danger" role="alert">
      {{ passwordError }}
    </div>
    <label for="confirmPassword" class="required d-none">Repeat password</label>
    <input id="confirmPassword" class="form-control my-2" v-model="repPassword" placeholder="repeat your password"
      type="password">
    <div v-if="repPasswordError" class="alert alert-danger" role="alert">
      <span v-html="repPasswordError"></span>
    </div>
  </form>
  <button class="btn btn-primary btn-lg" @click="createAccount"><i class="bi bi-person-check"></i> Create
    Account</button>
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
      errorCode: "",
    }
  },

  computed: {
    emailError() {
      switch (this.errorCode) {
        case "auth/invalid-email":
          return "Please enter a valid email address";
        case "auth/email-already-in-use":
          return "This email address is already in use - choose another email address";
        case "noEmail":
          return "Please enter your email";
        default:
          return '';
      }
    },
    passwordError() {
      switch (this.errorCode) {
        case "noPassword":
          return "Please enter your password";
        case "auth/weak-password":
          return "Password should be at least 6 characters";
        default:
          return '';
      }
    },
    repPasswordError() {
      switch (this.errorCode) {
        case "noRepPassword":
          return "Please repeat your password";
        case "noPwMatch":
          return "Please check your repeated password it does not match with the password you entered";
        case "auth/internal-error":
          return "Internal server error - I'm sorry, your request could not be processed! Plase try again or <a href='https://jkoster.com/contact'>contact me for support</a>";
        default:
          return '';
      }
    }
  },
  methods: {
    createAccount() {
      if (this.newEmail && this.newPassword && this.newPassword === this.repPassword) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.newEmail, this.newPassword)
          .then(async () => {
            this.errorCode = "Success";
            initCurrentUser(this.username);
            initUserChats();
            router.push('/chats').then(() => {
              console.log('Welcome')
            })
          })
          .catch((error) => {
            console.error(error.message)
            this.errorCode = error.code;
            this.newPassword = "";
            this.repPassword = "";
          })
      } else {
        if (this.newPassword !== this.repPassword) this.errorCode = "noPwMatch";
        if (!this.repPassword) this.errorCode = "noRepPassword";
        if (!this.newPassword) this.errorCode = "noPassword";
        if (!this.newEmail) this.errorCode = "noEmail";
      }
    },
  }
}
</script>
