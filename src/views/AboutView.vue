<template>
  <div class="vh-100 d-flex">
    <main class="container">
      <div class="row flex-nowrap h-100">

        <CreateChat @close="console.log('Closed')"></CreateChat>
        
      </div>
    </main>
  </div>
</template>
<script>
import CreateChat from "@/components/CreateChat";
export default {
  components: {CreateChat}
}
</script>