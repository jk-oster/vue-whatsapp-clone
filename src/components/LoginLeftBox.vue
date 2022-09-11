<template>
      <button class="btn btn-secondary btn-with-icon" @click="googleLogin"><i class="bi bi-google"></i>oogle Login</button>
</template>

<script>
import {
  getAuth, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth'
import router from "@/router";
import {initCurrentUser, initUserChats} from "@/firebase";
export default {
  name: "LoginLeftBox",
  methods: {
    googleLogin() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
          .then(() => {
            initCurrentUser();
            initUserChats()
            console.log("User signed in successfully");
            router.push('/chats').then(() => {
              console.log('Welcome')
            })
          })
          .catch((error) => {
            console.error(error)
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          })
  }
}
}
</script>