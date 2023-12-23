<template>
<div class="card p-3 d-flex gap-2" name="ProjectDocumentationAuthor">
  <h4>Сведения об индивидуальных предпринимателях и (или) юридических лицах, подготовивших проектную документацию (кроме генерального проектировщика)</h4>
  <t-author></t-author>
</div>
</template>

<script>
import tAuthor from "@/components/tAuthor.vue";

export default {
  name: "tProjectDocumentationAuthors",
  components: {tAuthor}
}
</script>

<style scoped>

</style>
