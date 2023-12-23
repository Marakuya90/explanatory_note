<template>
  <form name="ExplanatoryNoteModifications">
    <p>Сведения о внесении изменений в проектную документацию</p>
      <t-modification></t-modification>
  </form>
</template>

<script>
import TModification from "@/components/tModification.vue";

export default {
  name: "ExplanatoryNoteModifications",
  components: {TModification}
}
</script>

<style scoped>

</style>
