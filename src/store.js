/* eslint-disable */

import { reactive } from 'vue'
export const store = reactive({
    currentUser: {},
    knownUsers: [],
    chats: [],
    currentChat: {},
    msgSearch: "",
    chatSearch: "",
    lastMessageId: "",
})