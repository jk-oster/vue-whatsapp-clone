/* eslint-disable */
<template>
    <form class="form">
        <div>{{ store.currentChat.id ? '' : 'Global WhatsApp ' }}Chat id: <code><a :href="joinLink">{{ store.currentChat.id ? store.currentChat.id : globalChatId }} </a></code>
            <button class="ms-2 btn btn-secondary btn-sm btn-light" @click.prevent="copyToClipBoard">
                <i v-if="!copied" class="bi bi-clipboard me-2"></i>
                <i v-else class="bi bi-clipboard-check me-2"></i>
                Copy link
            </button>
        </div>
        <h3 v-if="store.currentChat.users">Users</h3>
        <ul class="w-100">
            <li v-for="user in store.currentChat.users" :value="user.id" :key="user.id">
                {{ user.name }}
            </li>
        </ul>

    </form>
</template>

<script>
import { store } from "@/store";
import { globalChatId } from "@/util";

export default {
    name: "ChatInfo",
    data() {
        return {
            store,
            copied: false,
            globalChatId: globalChatId
        }
    },
    computed: {
        joinLink() {
            console.log(this.$route)
            return window.location.origin + "/#/chats?join="+ (store.currentChat.id ? store.currentChat.id : globalChatId);
        }
    },
    methods: {
        copyToClipBoard() {
            this.copied = false;
            navigator.clipboard.writeText(this.joinLink).then(() => { this.copied = true });
        }
    }
}
</script>