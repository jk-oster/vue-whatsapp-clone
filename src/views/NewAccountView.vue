/* eslint-disable */
<template>

  <PageComp :boxLayout="boxLayout">

    <template #rightbox>
      <CreateAccountBox/>
      <LoginLeftBox/>
    </template>

  </PageComp>


</template>

<script>
import LoginLeftBox from "@/components/LoginLeftBox";
import CreateAccountBox from "@/components/CreateAccountBox";
import PageComp from "@/components/PageComp";

export default {
  name: "NewAccountView",
  components: {CreateAccountBox, LoginLeftBox, PageComp},
  computed: {
    boxLayout() { return this.isMobile() ? 'noLeft' : 'left'; }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 768
    }
  }
}
</script>
