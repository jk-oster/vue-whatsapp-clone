/* eslint-disable */
<template>

  <PageComp :boxLayout="boxLayout">

    <template #rightbox>
      <CreateAccountBox />
      <LoginLeftBox />
    </template>

  </PageComp>


</template>

<script>
import LoginLeftBox from "@/components/LoginLeftBox";
import CreateAccountBox from "@/components/CreateAccountBox";
import PageComp from "@/components/PageComp";
import { isMobile as checkMobile } from "@/util";

export default {
  name: "NewAccountView",
  components: { CreateAccountBox, LoginLeftBox, PageComp },
  data() {
    return {
      isMobile: checkMobile
    }
  },
  computed: {
    boxLayout() { return this.isMobile ? 'noLeft' : 'left'; }
  }
}
</script>
