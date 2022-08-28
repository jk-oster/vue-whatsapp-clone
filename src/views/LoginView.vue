/* eslint-disable */
<template>

  <PageComp :boxLayout="boxLayout">

    <template #rightbox>
      <LoginWithEmailBox />
      <LoginLeftBox />
    </template>

  </PageComp>

</template>

<script>
import LoginLeftBox from "@/components/LoginLeftBox";
import LoginWithEmailBox from "@/components/LoginWithEmailBox";
import PageComp from "@/components/PageComp";
import { isMobile } from "@/util";

export default {
  name: "LoginView",
  components: { PageComp, LoginWithEmailBox, LoginLeftBox },
  computed: {
    boxLayout() { return isMobile() ? 'noLeft' : 'left'; }
  },
}
</script>