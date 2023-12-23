<template>
  <form name="tEngineeringSurveyDocuments">
    <h4 class="bg-success">Перечень отчетной документации по
      результатам инженерных изысканий</h4>
    <t-engineering-survey-document></t-engineering-survey-document>
  </form>
</template>

<script>
import TEngineeringSurveyDocument from "@/components/tEngineeringSurveyDocument.vue";

export default {
  name: "tEngineeringSurveyDocuments",
  components: {TEngineeringSurveyDocument}
}
</script>

<style scoped>

</style>
