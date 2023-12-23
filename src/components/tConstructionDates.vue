<template>
<form name="ConstructionDates">
  <h4>Сведения о сроках строительства, вводе в эксплуатацию</h4>
  <app-input name="BeginDate"
             type="date"
             text="Дата начала работ"></app-input>
  <app-input name="EndDate"
             type="date"
             text="Дата окончания работ"></app-input>
  <app-input name="OperationDate"
             type="date"
             text="Дата ввода в эксплуатацию"></app-input>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tConstructionDates",
  components: {AppInput}
}
</script>

<style scoped>

</style>
