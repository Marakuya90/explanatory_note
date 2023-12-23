<template>
  <form name="tAdditionalData">
    <h4 class="bg-info ">Дополнительные материалы,
      не предусмотренные Положением о составе разделов
      проектной документации и требованиях к их содержанию,
      утвержденному Постановлением Правительства Российской Федерации No87 от 16.02.2008</h4>
    <t-data></t-data>
  </form>
</template>

<script>
import TData from "@/components/tData.vue";

export default {
  name: "tAdditionalData",
  components: {TData}
}
</script>

<style scoped>

</style>
