<template>
<form name="Functions">
  <h4>Сведения о функциональном назначении объекта капитального строительства, состав и характеристику производства, номенклатуру выпускаемой продукции (работ, услуг)</h4>
  <app-input name="Functions"
             text="Функциональное назначение объекта капитального строительства"></app-input>
  <t-functions-class></t-functions-class>
  <div name="Общие сведения о составе и характеристике производства">
    <textarea name="ProductsNote"></textarea>
  </div>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFunctionsClass from "@/components/tFunctionsClass.vue";

export default {
  name: "tFunctions",
  components: {TFunctionsClass, AppInput}
}
</script>

<style scoped>

</style>
