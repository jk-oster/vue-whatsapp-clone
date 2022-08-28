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
import { isMobile } from "@/util";

export default {
  name: "NewAccountView",
  components: { CreateAccountBox, LoginLeftBox, PageComp },
  computed: {
    boxLayout() { return isMobile() ? 'noLeft' : 'left'; }
  }
}
</script>
