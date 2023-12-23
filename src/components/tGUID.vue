<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <p class="text-body-secondary">Идентификатор блока данных "ExplanatoryNote"</p>
      <app-tooltips
        text-tooltips="Строгий формат xxxxxxxx- xxxx-xxxx-xxxx-xxxxxxxxxxxx Наложенные ограничения [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}- [0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}- [0-9A-Fa-f]{12}"
      ></app-tooltips>
    </div>
    <input type="text" name="id" >
  </div>
</template>

<script>
import AppTooltips from "@/components/AppTooltips.vue";

export default {
  name: "tGUID",
  components: {AppTooltips}
}
</script>

<style scoped>

</style>
