<template>
  <form name="ModelFile">
    <h4>Файл модели или файл части модели</h4>
    <app-input
        name="FileName"
        text="Имя файла модели"
    ></app-input>
<t-model-format></t-model-format>
    <app-input name="FileRelativePath"
               text="Относительный путь к файлу">
    </app-input>
    <div name="FileChecksum">
      <t-file-checksum></t-file-checksum>
    </div>
    <div name="SignFile">
      <t-sign-file></t-sign-file>
    </div>
    <label
        for="description"
        id="description">
      Произвольное описание файла модели
    </label>
    <textarea name="description"></textarea>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TModelFormat from "@/components/tModelFormat.vue";
import TFileChecksum from "@/components/tFileChecksum.vue";
import TSignFile from "@/components/tSignFile.vue";

export default {
  name: "tModelFile",
  components: {TSignFile, TModelFormat, AppInput, TFileChecksum}
}
</script>

<style scoped>

</style>
