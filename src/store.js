import { reactive } from 'vue'

export const store = reactive({
    currentUser: {},
    chats: [],
    currentChatInfo: {},
    currentMessages: [],
})