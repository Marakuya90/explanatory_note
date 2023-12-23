<template>
  <form class="card p-3 d-flex gap-2" name="Document">
    <h4>Документ</h4>
    <t-document-type></t-document-type>
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
    <app-input
        name="DocIssueAuthor"
        type="text"
        text="Наименование или ФИО автора документа">
    </app-input>
    <app-input
        name="DocChanges"
        type="text"
        text="Примечание об изменении документа">
    </app-input>
    <t-file
        text='Файл документа или файл фрагмента документа, представленного на экспертизу'
    ></t-file>
    <app-input
        name="Link"
        type="url"
        text="Ссылка на официально опубликованный документ в сети Интернет"
    ></app-input>
    <app-input
        name="Included"
        type="text"
        text="Сведения о документе, приложением к которому является текущий документ,
      в случае если является частью иного исходно-разрешительного документа"
    ></app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFile from "@/components/tFile.vue";
import TDocumentType from "@/components/tDocumentType.vue";

export default {
  name: "tDocument",
  components: {TDocumentType, TFile, AppInput}
}
</script>

<style scoped>

</style>
