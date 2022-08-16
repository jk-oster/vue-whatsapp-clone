<template>
  <div class="whatsapp-element">
    <div id="headerImg" class="img-title-element"><div>
      <img class="chat_img" src="https://picsum.photos/200" alt="">
    </div>
      <div class="ml-2 align-middle">
        <p class="font-weight-bold mb-0">Geschwister</p>
        <small><span>Susi Musterfrau, Anna Maier, Franz Huber</span></small>
      </div></div>
    <div class="icon-list">

      <img src="../assets/search-svgrepo-com.svg" alt="" class="icon mx-2"/>
      <img src="../assets/paperclip-svgrepo-com.svg" alt="" class="icon mx-2"/>
      <img src="../assets/more-vertical-svgrepo-com.svg" alt="" class="icon mx-2"/>

</div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader"
}
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  opacity: .6;
}
</style>