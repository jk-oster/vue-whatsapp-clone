/* eslint-disable */
<template>

  <PageComp>

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
}
</script>
