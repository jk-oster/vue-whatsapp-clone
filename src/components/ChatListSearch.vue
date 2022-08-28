<template>

  <div class="p-2 pt-0 d-flex bg-wa-banner">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input class="form-control form-control-sm w-100 border-0" type="text" v-model="search" @input="store.chatSearch = search"
      placeholder="Search in chats...">
  </div>

</template>

<script>
import { store } from '@/store';

export default {
  name: "ChatListSearch",
  data() {
    return {
      search: "",
      store,
    }
  },
}
</script>