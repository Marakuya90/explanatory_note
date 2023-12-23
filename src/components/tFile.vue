<template>
  <form name="File">
    <h4>{{ text }}</h4>
  <app-input
      name="FileName"
      text="Имя файла документа"
      type="text"
  ></app-input>
  <app-input
      name="FileFormat"
      text="Формат файла документа"
  ></app-input>
  <app-input
      name="FileRelativePath"
      text="Относительный путь к файлу"
  ></app-input>
<t-file-checksum></t-file-checksum>
  <t-sign-file></t-sign-file>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFileChecksum from "@/components/tFileChecksum.vue";
import TSignFile from "@/components/tSignFile.vue";

export default {
  name: "tFile",
  components: {TSignFile, TFileChecksum, AppInput},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
