/* eslint-disable */
<template>

  <PageComp :boxLayout="boxLayout">

    <template #rightbox>
      <LoginWithEmailBox :route="route" />
      <LoginLeftBox :route="route" />
    </template>

  </PageComp>

</template>

<script>
import LoginLeftBox from "@/components/LoginLeftBox";
import LoginWithEmailBox from "@/components/LoginWithEmailBox";
import PageComp from "@/components/PageComp";
import { isMobile as checkMobile } from "@/util";

export default {
  name: "LoginView",
  components: { PageComp, LoginWithEmailBox, LoginLeftBox },
  data() {
    return {
      isMobile: checkMobile,
      route: "/chats"
    }
  },
  computed: {
    boxLayout() { return this.isMobile ? 'noLeft' : 'left'; }
  },
}
</script>