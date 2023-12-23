<template>
  <form name="SignFile">
  <h4>Файл подписи к документу</h4>
<app-input
    name="FileName"
    text="Имя файла подписи к документу"
    type="text">
</app-input>
  <app-input
      name="FileFormat"
      text="Формат файла подписи к документу"
      type="text">
  </app-input>
  <app-input
      name="FileRelativePath"
      text="Относительный путь к файлу"
      type="text">
  </app-input>
  <t-file-checksum></t-file-checksum>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFileChecksum from "@/components/tFileChecksum.vue";

export default {
  name: "tSignFile",
  components: {TFileChecksum, AppInput}
}
</script>

<style scoped>

</style>
