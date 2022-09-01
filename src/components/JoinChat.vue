/* eslint-disable */
<template>
    <form class="form">
        <div><router-link :to="'/chats?join='+ globalChatId">Enter the global WhatsApp Clone Chat</router-link> or join a private chat room by its <code>chat id</code>.
        </div>
        <div class="d-flex w-100">
            <label for="chatId" class="d-none">Chat ID</label>
            <input id="chatId" type="text" placeholder="chat id" v-model="chatId"
                class="form-control form-control w-100 text-input my-2" />
            <!--label for="password" class="d-none">Password</!--label>
            <input id="password" type="text" placeholder="password" v-model="password"
                class="form-control form-control w-100 text-input my-2" /-->
        </div>

        <button class="btn btn-primary" @click.prevent="joinAChat"><i class="bi bi-plus"></i> Join</button>
    </form>
</template>

<script>
import { joinChat } from "@/firebase";
import { globalChatId } from "@/util";

export default {
    name: "JoinChat",
    
    methods: {
        async joinAChat() {
            joinChat(this.chatId);
            this.$emit('close');
        },
    },
    data() {
        return {
            chatId: '',
            password: '',
            globalChatId: globalChatId,
        }
    }
}
</script>