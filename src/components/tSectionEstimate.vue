<template>
<form name="SectionEstimate">
  <h4>{{ title }}</h4>
  <div name="EstimateExplanatoryNote">
    <t-project-document-section
        title="Пояснительная записка к сметной документации">
    </t-project-document-section>
  </div>
  <div name="CostSummary">
    <t-project-document-section
        title="Сводка затрат">
    </t-project-document-section>
  </div>
  <div name="SummaryEstimate">
    <t-project-document-section
        title="Сводный сметный расчет">
    </t-project-document-section>
  </div>
  <div name="ObjectLocalEstimates">
    <t-project-document-section
        title="Объектные и локальные расчеты">
    </t-project-document-section>
  </div>
  <div name="CostsEstimates">
    <t-project-document-section
        title="Сметные расчеты на отдельные виды затрат">
    </t-project-document-section>
  </div>
</form>
</template>

<script>

import TProjectDocumentSection from "@/components/tProjectDocumentSection.vue";

export default {
  name: "tSectionEstimate",
  components: {TProjectDocumentSection},
  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>

</style>
