<template>
  <div class="chatroom"  scollable="true">

    <div class="message out">
      <div>
        <div>
          <b>Franz Huber</b><br>Kaffee hört sich super an! :)
        </div>
        <div class="time">
          17:47
        </div>
      </div>
    </div>

    <div class="message in">
      <div>
        <div>
          Hallo :) Mir gehts auch gut. Kaffee trinken geht bei mir morgen leider nicht, weil bin noch bis
          Freitag in Hagenberg :(
        </div>
        <div class="time">
          17:48
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "ChatRoom"
}
</script>

<style scoped>
.chatroom {
  background-color: var(--beige);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.message {
  display: flex;
  max-width: 80%;
  position: relative;
}

.message > div{
  background-color: var(--message-green);
  border-radius: .5em;
  margin: 1em 2em;
  padding: 1em;
  text-align: left;
}

.message > div::before {
  content: '';
  border-style: solid;
  border-width: 18px 18px 0 0;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  right: 14px;
  top: 14px;
}

.message.out > div::before {
  border-color: var(--message-green) transparent transparent transparent;
  left: 14px;
  right: initial;
  transform: rotate(90deg);
}

.message.in {
  justify-content: flex-end;
  margin-left: auto;

}

.message.in > div {
  background-color: #fff;
}

.time {
  text-align: right;
  font-size: .65em;
}

.message {
  animation-name: fade-in;
  animation-duration: 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>