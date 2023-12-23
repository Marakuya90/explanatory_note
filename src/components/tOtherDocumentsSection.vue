<template>
  <form name="OtherDocumentsSection">
    <h4>{{ text }}</h4>
    <div name="IndustrialSafetyDeclaration">
      <t-project-document-section title="Декларация промышленной безопасности опасных производственных объектов"></t-project-document-section>
    </div>
    <div name="HydraulicStructuresSafetyDeclaration">
      <t-project-document-section title="Декларация безопасности гидротехнических сооружений"></t-project-document-section>
    </div>
    <div name="EventsList">
      <t-project-document-section
          title="Перечень мероприятий по гражданской обороне,
          мероприятий по предупреждению чрезвычайных ситуаций
          природного и техногенного характера, мероприятий по
          противодействию терроризму для объектов использования
          атомной энергии (в том числе ядерных установок, пунктов
          хранения ядерных материалов и радиоактивных веществ),
          опасных производственных объектов, определяемых таковыми
          в соответствии с законодательством Российской Федерации,
          особо опасных, технически сложных, уникальных объектов,
          объектов обороны и безопасностий">
      </t-project-document-section>
    </div>
    <div name="OtherDocuments">
      <t-project-document-section
          title="Иная документация, установленная
          законодательными и иными
нормативными правовыми актами Российской Федерации">
      </t-project-document-section>
    </div>
  </form>
</template>

<script>
import TProjectDocumentSection from "@/components/tProjectDocumentSection.vue";

export default {
  name: "tOtherDocumentsSection",
  components: {TProjectDocumentSection},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
