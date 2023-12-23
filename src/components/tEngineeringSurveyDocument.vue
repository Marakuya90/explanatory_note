<template>
  <form name="tEngineeringSurveyDocument">
    <h4>Документ - отчет о результатах инженерных изысканий</h4>
    <t-engineering-survey-document-type></t-engineering-survey-document-type>
    <app-input
        name="DocName"
        type="text"
        text="Наименование документа">
    </app-input>
    <app-input
        name="DocNumber"
        type="text"
        text="Номер (обозначение, шифр) документа">
    </app-input>
    <app-input
        name="DocDate"
        type="date"
        text="Дата документа">
    </app-input>
    <full-doc-issue-author></full-doc-issue-author>
    <app-input
        name="DocChanges"
        type="text"
        text="Примечание об изменении документа">
    </app-input>
    <component
        :is="'tFile'"
        v-for="item in files"
        :key="item"
        text="Файл документа или файл фрагмента документа - отчета о результатах инженерных изысканий">
    </component>
    <button
        class="btn btn-light"
        @click.prevent=newComponent(this.files)>
      Добавить файл
    </button>
  </form>
</template>
<script>

import TEngineeringSurveyDocumentType from "@/components/tEngineeringSurveyDocumentType.vue";
import FullDocIssueAuthor from "@/components/FullDocIssueAuthor.vue";
import TFile from "@/components/tFile.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tEngineeringSurveyDocument",
  components: {AppInput, TFile, FullDocIssueAuthor, TEngineeringSurveyDocumentType},
  data() {
    return {
      files: []
    }
  },
  methods: {
    newComponent(arr) {
      arr.push(arr.length)
      console.log(arr)
    }
  }
}
</script>

<style scoped>

</style>
