<template>
<form name="EnergyEfficiency">
  <h4>Сведения о классе энергетической эффективности (в случае, если присвоение класса энергетической эффективности объекту капитального строительства является обязательным в соответствии с законодательством Российской Федерации об энергосбережении) и оповышении энергетической эффективности</h4>
  <t-efficiency-class></t-efficiency-class>
  <div name="EnergyEfficiencyImproving">
    <t-text-block title="Сведения о повышении энергетической эффективности"></t-text-block>
  </div>
</form>
</template>

<script>
import TEfficiencyClass from "@/components/tEfficiencyClass.vue";
import TTextBlock from "@/components/tTextBlock.vue";

export default {
  name: "tEnergyEfficiency",
  components: {TTextBlock, TEfficiencyClass}
}
</script>

<style scoped>

</style>
