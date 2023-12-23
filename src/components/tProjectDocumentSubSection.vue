<template>
<form name="ProjectDocumentSubSection">
  <app-input name="Name"
             text="Наименование подраздела"></app-input>
  <div name="Document">
    <t-project-document></t-project-document>
  </div>
  <app-input name="SubSection"
             text="Подраздел"></app-input>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TProjectDocument from "@/components/tProjectDocument.vue";

export default {
  name: "tProjectDocumentSubSection",
  components: {TProjectDocument, AppInput}
}
</script>

<style scoped>

</style>
