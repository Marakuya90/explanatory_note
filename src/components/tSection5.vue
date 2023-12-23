<template>
  <form name="Section5">

    <div name="ElectricitySupply">
      <t-project-document-section
          title="Подраздел «Система электроснабжения»">
      </t-project-document-section>
    </div>

    <div name="WaterSupply">
      <t-project-document-section
          title="Подраздел «Система водоснабжения»">
      </t-project-document-section>
    </div>

    <div name="WaterRemoval">
      <t-project-document-section
          title="Подраздел «Система водоотведения»">
      </t-project-document-section>
    </div>

    <div name="HeatingVentilation">
      <t-project-document-section
          title="Подраздел «Отопление, вентиляция и кондиционирование воздуха, тепловые сети»">
      </t-project-document-section>
    </div>

    <div name="Communication">
      <t-project-document-section
          title="Подраздел «Сети связи»">
      </t-project-document-section>
    </div>

    <div name="GasSupply">
      <t-project-document-section
          title="Подраздел «Система газоснабжения»">
      </t-project-document-section>
    </div>
  </form>
</template>

<script>
import TProjectDocumentSection from "@/components/tProjectDocumentSection.vue";

export default {
  name: "tSection5",
  components: {TProjectDocumentSection}
}
</script>

<style scoped>

</style>
