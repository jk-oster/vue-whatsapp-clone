<template>

  <div class="m-2 border rounded d-flex">
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

<style scoped>
.icon {
  width: 20px !important;
  height: auto !important;
  opacity: 0.6;
}
</style>