<template>

  <PageComp>
    <template #header>
      About this whatsapp clone
    </template>
    <template #rightbox>
      <h2>This App...</h2>
      <p>...is a WhatsApp clone built with VueJs and Firebase by &copy; <a href="https://jkoster.com">Jakob Osterberger</a>
        2022.</p>
    </template>
  </PageComp>

</template>
<script>
import PageComp from "@/components/PageComp";
export default {
  components: {PageComp}
}
</script>