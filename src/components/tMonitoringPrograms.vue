<template>
  <form name="MonitoringPrograms">
    <h4>Сведения о программах следующих видов мониторинга: геотехнический, включая мониторинг кренов и осадок; гидрогеологический; сейсмологический; метеорологический; аэрологический; гидрологический; геодинамический; периодический контроль параметров
      внешних техногенных воздействий</h4>
    <div name="GeotechnicalMonitoring">
      <t-text-block title="Сведения о программе геотехнического мониторинга,
       включая мониторинг кренов и осадок"></t-text-block>
    </div>
    <div name="HydrogeologicalMonitoring">
      <t-text-block title="Сведения о программе гидрогеологического мониторинга"></t-text-block>
    </div>
    <div name="SeismologicalMonitoring">
      <t-text-block title="Сведения о программе сейсмологического мониторинга"></t-text-block>
    </div>
    <div name="MeteorologicalMonitoring">
      <t-text-block title="Сведения о программе метеорологического мониторинга"></t-text-block>
    </div>
    <div name="AerologicalMonitoring">
      <t-text-block title="Сведения о программе аэрологического мониторинга"></t-text-block>
    </div>
    <div name="HydrologicalMonitoring">
      <t-text-block title="Сведения о программе гидрологического мониторинга"></t-text-block>
    </div>
    <div name="GeodynamicalMonitoring">
      <t-text-block title="Сведения о программе геодинамического мониторинга"></t-text-block>
    </div>
    <div name="TechnogenicMonitoring">
      <t-text-block title="Сведения о программе периодического контроля параметров внешних техногенных воздействий"></t-text-block>
    </div>
  </form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";

export default {
  name: "tMonitoringPrograms",
  components: {TTextBlock}
}
</script>

<style scoped>

</style>
