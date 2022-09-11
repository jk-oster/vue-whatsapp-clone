/* eslint-disable */

import { 
    reactive, 
    // watchEffect 
} from "vue";

export const store = reactive({
    currentUser: {},
    knownUsers: [],
    chats: [],
    currentChat: {},
    msgSearch: "",
    chatSearch: "",
    lastMessageId: "",
});

// console.log(store);

// const savedStore = JSON.parse(localStorage.getItem("store") ?? {});

// console.log(savedStore.currentChat);

// store.currentChat = savedStore.currentChat;
// store.knownUsers = savedStore.knownUsers;
// store.chats = ['sex','lol'];
// store.lastMessageId = "halloooooooooooooo";
// store.currentUser = savedStore.currentUser;

// console.log(store);

// watchEffect(() => {
//   localStorage.setItem("store", JSON.stringify(store));
// });
