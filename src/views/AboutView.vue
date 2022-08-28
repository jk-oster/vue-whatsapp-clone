<template>
  <PageComp>
    <template #header>
      <span> About this App</span>
    </template>
    <template #rightbox>
      <h2>This App...</h2>
      <p><b>...is a WhatsApp clone hosted and deployed by Vercel, built with VueJs and Firebase by &copy; <a
            href="https://jkoster.com">Jakob
            Osterberger</a>
          2022.</b></p>
      <p class="my-1">The following npm dependencies are used:
      </p>
      <code>
        "core-js": "^3.8.3", <br>
        "vue": "^3.2.13", <br>
        "vue-router": "^4.0.3", <br>
        "register-service-worker": "^1.7.2", <br>
        "firebase": "^9.9.3", <br>
        "sass-loader": "^13.0.2", <br>
        "vue-content-loader": "^2.0.1", <br>
        "bootstrap": "^5.2.0", <br>
        "bootstrap-icons": "^1.9.1", <br>
      </code>
    </template>
  </PageComp>

</template>
<script>
import PageComp from "@/components/PageComp";
export default {
  components: { PageComp }
}
</script>