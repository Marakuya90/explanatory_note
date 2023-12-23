<template>
<!--  <div class="d-flex justify-content-between">-->
<!--    <div class="d-flex">-->
<!--      <p>Шифр пояснительной записки</p>-->
<!--      <app-tooltips-->
<!--          text-tooltips="По ГОСТ Р 21.101-2020"-->
<!--      ></app-tooltips>-->
<!--    </div>-->
<!--    <input type="text" name="ExplanatoryNoteNumber">-->
<!--  </div>-->
  <div class="mb-3">
    <label for="exampleInputEmail3" class="form-label">Шифр пояснительной записки</label>
    <input type="text" class="form-control" id="exampleInputEmail3" name="ExplanatoryNoteNumber" aria-describedby="emailHelp">
    <div id="ExplanatoryNoteNumberHelp" class="form-text">По ГОСТ Р 21.101-2020</div>
  </div>
</template>

<script>
import AppTooltips from "@/components/AppTooltips.vue";

export default {
  name: "ExplanatoryNoteNumber",
  components: { AppTooltips }
}
</script>

<style scoped>

</style>
