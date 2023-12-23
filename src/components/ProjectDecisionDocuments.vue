<template>
  <form name="ProjectDecisionDocuments">
    <h4>Перечень документов, на основании которых принято
      решение о подготовке проектной документации</h4>
    <t-documents></t-documents>
  </form>
</template>

<script>
import TDocuments from "@/components/tDocuments.vue";

export default {
  name: "ProjectDecisionDocuments",
  components: {TDocuments}
}
</script>

<style scoped>

</style>
