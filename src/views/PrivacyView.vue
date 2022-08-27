<template>
    <PageComp :layout="'noCols'">
        <template #header>
            <span> Privacy</span>
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