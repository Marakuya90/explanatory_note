<template>
  <form name="NuclearPlantFeatures">
    <div name="ObjectList">
      <t-text-block
          title="Список объектов производственного и непроизводственного назначения,
    входящих в состав проектируемой атомной станции">
      </t-text-block>
    </div>
    <div name="NuclearSafety">
      <t-text-block
          title="Общие сведения о требованиях к системам, обеспечивающим ядерную и
          радиационную безопасность атомной станции">
      </t-text-block>
    </div>
    <div name="OperationalLimits">
      <t-text-block
          title="Исходные данные, пределы безопасной эксплуатации и эксплуатационные
          пределы оборудования и систем">
      </t-text-block>
    </div>
    <div name="NuclearPlantControl">
      <t-text-block
          title="
            Сведения об организации управления атомной станцией, ее эксплуатационном, ремонтном,
            техническом обслуживании, штатном расписании, требованиях к персоналу и условиях труда работников">
      </t-text-block>
    </div>
    <div name="ReactorPlant">
      <t-text-block
          title="Основные сведения о реакторной установке, применяемой на атомной станции, об исходных технических
           требованиях на оборудование, применяемое на атомной станции, об основном и вспомогательном оборудовании
           основных технологических контуров атомной станции">
      </t-text-block>
    </div>
    <div name="NuclearSafitySoftware">
      <t-text-block
          title="Сведения о компьютерных программах, которые использовались для анализов безопасности атомной станции,
           об аттестации и верификации применяемых компьютерных программ, о системах сертификации, стандартизации и
           метрологическом обеспечении, о разработке программы обеспечения качества, отчета по обоснованию безопасности
            и вероятностных анализов безопасности атомной станции первого и второго уровней, о стационарной системе
            непрерывного мониторинга технического состояния объекта капитального строительства">
      </t-text-block>
    </div>
  <t-monitoring-programs></t-monitoring-programs>
  </form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";
import TMonitoringPrograms from "@/components/tMonitoringPrograms.vue";

export default {
  name: "tNuclearPlantFeatures",
  components: {TMonitoringPrograms, TTextBlock}
}
</script>

<style scoped>

</style>
