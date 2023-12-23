<template>
<div class="p-3 d-flex gap-2">
  <div class="d-flex">
    <h5>Код типа документа</h5>
    <app-tooltips
        text-tooltips="Указывается код из классификатора – Таблица 2.">
    </app-tooltips>
  </div>
<select name="DocType">
  <option v-for="code in codes" :value="code" :key = code.id >{{ code }}</option>
</select>
</div>
</template>

<script>

import AppTooltips from "@/components/AppTooltips.vue";

export default {
  name: "tDocumentType",
  components: {AppTooltips},
  data() {
    return {
      codes: []
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
