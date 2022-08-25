/* eslint-disable */
<template>

  <PageComp>

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
}
</script>