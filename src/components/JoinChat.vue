/* eslint-disable */
<template>
    <form class="form">
        <div class="w-100">Join the global WhatsApp Clone Chat by the
            chat id:
            <code>{{ globalChatId }}</code>
        </div>
        <div class="d-flex w-100">
            <label for="chatId" class="d-none">Chat ID</label>
            <input id="chatId" type="text" placeholder="chat id" v-model="chatId"
                class="form-control form-control w-100 text-input my-2" />
            <!--label for="password" class="d-none">Password</!--label>
            <input id="password" type="text" placeholder="password" v-model="password"
                class="form-control form-control w-100 text-input my-2" /-->
        </div>

        <button class="btn btn-primary" @click.prevent="joinChat"><i class="bi bi-plus"></i> Join</button>
    </form>
</template>

<script>
import { store } from "@/store";
import { addChat, getChatData } from "@/firebase";
import { globalChatId } from "@/util";

export default {
    name: "JoinChat",
    methods: {
        async joinChat() {
            const chat = await getChatData(this.chatId);
            if (chat) {
                chat.users = [...chat.users.filter(user => user.id !== store.currentUser.id), store.currentUser.id];
                addChat(chat);
                this.$emit('close');
            }
        },
    },
    data() {
        return {
            chatId: '',
            password: '',
            gobalChatId: globalChatId,
        }
    }
}
</script>