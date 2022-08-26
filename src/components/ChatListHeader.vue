<template>
  <div class="whatsapp-element">
    <div class="icon-list d-flex justify-content-between">

      <img src="../assets/logout-svgrepo-com.svg" alt="" class="mx-2 icon "/>
      <img src="../assets/add-user-svgrepo-com.svg" alt="" class="mx-2 icon"/>
      <img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="mx-2 icon"/>

    </div>
  </div>
</template>

<script>
export default {
  name: "ChatListHeader"
}
</script>

<style scoped>
.icon-list {
  width: 100%;
}
.icon {
  width: 20px;
  height: 20px;
  opacity: .6;
}
</style>