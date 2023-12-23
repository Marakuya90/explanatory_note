<template>
<form name="ProjectInitialDocuments">
  <h4>Перечень исходно- разрешительной
    документации, кроме отчетной документации по РИИ</h4>
  <t-documents></t-documents>
</form>
</template>

<script>
import TDocuments from "@/components/tDocuments.vue";

export default {
  name: "ProjectInitialDocuments",
  components: {TDocuments}
}
</script>

<style scoped>

</style>
