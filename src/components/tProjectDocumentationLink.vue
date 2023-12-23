<template>
<form name="ProjectDocumentationLink">
  <h4>Ссылка на документ проектной документации</h4>
  <app-input name="DocNumber"
             text="Ссылка на документ проектной документации (Шифр документа из состава проектной документации на который формируется ссылка)">
  </app-input>
  <app-input name="DocSectionLink"
             text="Ссылка на главу или пункт в документе"></app-input>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tProjectDocumentationLink",
  components: {AppInput}
}
</script>

<style scoped>

</style>
