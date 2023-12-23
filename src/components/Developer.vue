<template>
  <div class="card p-3 d-flex gap-2 pb-2" name="Developer">
    <div class="d-flex">
      <h4>Сведения о застройщике</h4>
      <app-tooltips
          text-tooltips="Возможно: юридическое лицо, иностранное юридическое лицо, индивидуальный предприниматель, физическое лицо. Может быть несколько элементов"
      ></app-tooltips>
    </div>
    <t-developer></t-developer>
  </div>
</template>

<script>
import TDeveloper from "@/components/tDeveloper.vue";
import AppTooltips from "@/components/AppTooltips.vue";
export default {
  name: "DeveLoper",
  components: {TDeveloper, AppTooltips}
}
</script>

<style scoped>

</style>
