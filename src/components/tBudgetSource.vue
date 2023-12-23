<template>
  <form name="BudgetSource">
    <h4>Сведения об источнике финансирования (Бюджетные средства)</h4>
    <t-budget-level></t-budget-level>
    <app-input
        name="SourceRatio"
        text="Размер финансирования (доля в процентах)"
    ></app-input>
  </form>

</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TBudgetLevel from "@/components/tBudgetLevel.vue";

export default {
  name: "tBudgetSource",
  components: {TBudgetLevel, AppInput}
}
</script>

<style scoped>

</style>
