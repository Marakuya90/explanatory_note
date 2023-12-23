<template>
<form name="GasNetworksFeatures">
  <h4>Дополнительные требования к пояснительной записке в соответствии с Приложением 9
    к Положению о составе разделов проектной документации и требованиях к их содержанию
    (в отношении сетей газораспределения и (или) газопотребления давлением до 1,2 МПа включительно)</h4>
  <div name="StrengthCalculation">
    <t-text-block title="Расчет трубопроводов на прочность и устойчивость"></t-text-block>
  </div>
  <div name="EnvironmentalProtection">
    <t-text-block title="Перечень мероприятий по охране окружающей среды,
    включающий мероприятия по предотвращению и (или) снижению возможного
    негативного воздействия на окружающую среду при эксплуатации линейного
    объекта и рациональному использованию природных ресурсов на
    период строительства и эксплуатации линейного объекта"></t-text-block>
  </div>
  <div name="FireSafety">
    <t-text-block title="Перечень мероприятий по обеспечению пожарной безопасности"></t-text-block>
  </div>
  <div name="OperationalSafety">
    <t-text-block title="Перечень мероприятий по безопасной эксплуатации линейного объекта"></t-text-block>
  </div>
  <div name="PerairFrequency">
    <t-text-block title="Нормативная периодичность выполнения работ по капитальному ремонту линейного объекта"></t-text-block>
  </div>

</form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";

export default {
  name: "tGasNetworksFeatures",
  components: {TTextBlock}
}
</script>

<style scoped>

</style>
