<template>
<form name="ProjectDocument">
  <h4>Документ, часть проектной документации</h4>
  <app-input name="DocName"
             text="Наименование документа"></app-input>
  <app-input name="DocNumber"
             text="Номер (обозначение, шифр) документа"></app-input>
  <app-input name="DocChanges"
             text="Примечание об изменении документа"></app-input>
  <div name="File">
    <t-file text="Файл документа или файл фрагмента документа, из состава разработанной проектной документации"></t-file>
  </div>
  <app-input name="ObjectIDREFS"
             text="Идентификатор (идентификаторы) объекта (части объекта),
              описание которого(которой) содержится в томе документации"></app-input>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFile from "@/components/tFile.vue";

export default {
  name: "tProjectDocument",
  components: {TFile, AppInput}
}
</script>

<style scoped>

</style>
