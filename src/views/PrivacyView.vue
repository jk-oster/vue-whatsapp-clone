<template>
    <PageComp layout="noCols" boxLayout="noLeft">
        <template #header>
            <span> Data & privacy</span>
        </template>
        <template #main>
            <DataPrivacy />
        </template>
    </PageComp>

</template>
<script>
import PageComp from "@/components/PageComp";
import DataPrivacy from "@/res/DataPrivacy.vue";
export default {
    components: { PageComp, DataPrivacy }
}
</script>