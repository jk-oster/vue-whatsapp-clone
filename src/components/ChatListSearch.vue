<template>
  <div class="m-2 border rounded d-flex">
    <img src="../assets/search-svgrepo-com.svg" alt="" class="pl-2 icon"/>
    <input class="form-control form-control-sm w-100 border-0" type="text" placeholder="Suchen oder neuen Chat beginnen">
  </div>
</template>

<script>
export default {
  name: "ChatListSearch"
}
</script>

<style scoped>
.icon {
  width: 20px !important;
  height: auto !important;
  opacity: 0.6;
}
</style>