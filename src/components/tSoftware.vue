<template>
  <form name="Software">
    <app-input name="Name"
               text="Наименование программного продукта"></app-input>
    <app-input name="Version"
               text="Версия программного продукта"></app-input>
    <app-input name="UsingNote"
               text="Сведения при подготовки каких расчетов или подготовки какой
части проектной документации использовался программный продукт"></app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tSoftware",
  components: {AppInput}
}
</script>

<style scoped>

</style>
