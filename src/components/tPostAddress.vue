<template>
  <app-input
      text="Страна"
      type="text"
      name="Country"
  ></app-input>
  <t-regions-r-f></t-regions-r-f>
  <t-post-index></t-post-index>


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
      type="text"
      name="Building"
  ></app-input>
  <app-input
      text="Номер помещения"
      type="text"
      name="Room"
  ></app-input>
  <app-input
      text="Неформализованное описание"
      type="text"
      name="Note"
  ></app-input>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TRegionsRF from "@/components/tRegionsRF.vue";
import TPostIndex from "@/components/tPostIndex.vue";

export default {
  name: "tPostAddress",
  components: {TPostIndex, TRegionsRF, AppInput}
}
</script>

<style scoped>

</style>
