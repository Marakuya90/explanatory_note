<template>
<form name="ProjectDocumentSection">
  <h4>{{ title }}</h4>
  <div name="Document">
    <t-project-document></t-project-document>
  </div>
  <t-project-document-sub-section></t-project-document-sub-section>
</form>

</template>

<script>
import TProjectDocument from "@/components/tProjectDocument.vue";
import TProjectDocumentSubSection from "@/components/tProjectDocumentSubSection.vue";

export default {
  name: "tProjectDocumentSection",
  components: {TProjectDocumentSubSection, TProjectDocument},
 props: {
    title: {
      type: String,
      required: true
    }
 }
}
</script>

<style scoped>

</style>
