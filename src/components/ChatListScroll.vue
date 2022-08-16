<template>
  <ul class="list-group border-top" scollable="true">
    <li id="contact_7" class="list-group-item whatsapp-element active">
      <div class="img-title-element">
        <div>
          <img class="chat_img roun" src="https://picsum.photos/200" alt="">
        </div>
        <div class="ml-2 align-middle">
          <p class="font-weight-bold mb-0">Geschwister</p>
          <small>Mmh, lecker :) Freu mich!</small>
        </div>
      </div>
      <p class="mb-0">17:54</p>
    </li>
    <li id="contact_7" class="list-group-item whatsapp-element">
      <div class="img-title-element">
        <div>
          <img class="chat_img roun" src="https://picsum.photos/200" alt="">
        </div>
        <div class="ml-2 align-middle">
          <p class="font-weight-bold mb-0">Geschwister</p>
          <small>Mmh, lecker :) Freu mich!</small>
        </div>
      </div>
      <p class="mb-0">17:54</p>
    </li>
    <li id="contact_7" class="list-group-item whatsapp-element new-message">
      <div class="img-title-element">
        <div>
          <img class="chat_img roun" src="https://picsum.photos/200" alt="">
        </div>
        <div class="ml-2 align-middle">
          <p class="font-weight-bold mb-0">Geschwister</p>
          <small>Mmh, lecker :) Freu mich!</small>
        </div>
      </div>
      <p class="mb-0">17:54</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ChatListScroll"
}
</script>

<style scoped>
.list-group {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>