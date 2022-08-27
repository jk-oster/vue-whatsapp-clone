/* eslint-disable */
<template>

  <PageComp :boxLayout="boxLayout">

    <template #rightbox>
      <LoginWithEmailBox/>
      <LoginLeftBox/>
    </template>

  </PageComp>

</template>

<script>
import LoginLeftBox from "@/components/LoginLeftBox";
import LoginWithEmailBox from "@/components/LoginWithEmailBox";
import PageComp from "@/components/PageComp";

export default {
  name: "LoginView",
  components: {PageComp, LoginWithEmailBox, LoginLeftBox},
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