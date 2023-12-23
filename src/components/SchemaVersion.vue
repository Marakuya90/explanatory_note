<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <p>Номер версии схемы, используемой при создании пояснительной записки</p>
      <app-tooltips
        text-tooltips="Формат номера схемы «xx.xx». Фиксированное значение «01.03»"
      ></app-tooltips>
    </div>
    <input type="text" name="SchemaVersion" :value="SCHEMA_VERSION" disabled>
  </div>
</template>

<script>
import AppTooltips from "@/components/AppTooltips.vue";
import {mapGetters} from "vuex";

export default {
  name: "SchemaVersion",
  components: {AppTooltips},
  computed: {
    ...mapGetters('EXPLNN',['SCHEMA_VERSION'])
  }
}
</script>

<style scoped>

</style>
