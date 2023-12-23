<template>
<form name="tData">
  <h4>Дополнительный материал</h4>
  <label for="DataDescription">Описание материала</label>
  <textarea
  name="DataDescription"
  ></textarea>
  <t-file text="Файл, содержащий материал"></t-file>
</form>
</template>

<script>
import TFile from "@/components/tFile.vue";

export default {
  name: "tData",
  components: {TFile}
}
</script>

<style scoped>

</style>
