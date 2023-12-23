<template>
  <div class="d-flex flex-column">
    <h4>{{ text }}</h4>
  <app-input
      text="Страна"
      type="text"
      name="Country"
  ></app-input>
  <t-regions-r-f
  ></t-regions-r-f>
  <app-input
      text="Наименование района"
      type="text"
      name="District"
  ></app-input>
  <app-input
      text="Город"
      type="text"
      name="City"
  ></app-input>
  <app-input
      text="Населенный пункт"
      type="text"
      name="Settlement"
  ></app-input>
  <app-input
      text="Улица"
      type="text"
      name="Street"
  ></app-input>
  <app-input
      text="Номер здания/сооружения"
      type="number"
      name="Building"
  ></app-input>
  <app-input
      text="Номер помещения"
      type="number"
      name="Room"
  ></app-input>
  <app-input
      text="Неформализованное описание адреса"
      type="text"
      name="Note"
  ></app-input>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TRegionsRF from "@/components/tRegionsRF.vue";

export default {
  name: "tAddress",
  components: {TRegionsRF, AppInput },
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
