<template>
  <form name="NonLinearProjectDocumentContent">
  <div name="Section2">
    <t-project-document-section
        title="Раздел 2. «Схема планировочной организации земельного участка»">
    </t-project-document-section>
  </div>
    <div name="Section3">
      <t-project-document-section
          title="Раздел 3. «Объемно- планировочные и архитектурные решения»">
      </t-project-document-section>
    </div>
    <div name="Section4">
      <t-project-document-section
        title="Раздел 4. «Конструктивные решения»">
    </t-project-document-section>
    </div>
    <t-section5></t-section5>
    <div name="Section6">
      <t-project-document-section
          title="Раздел 6. «Технологические решения»">
      </t-project-document-section>
    </div>
    <div name="Section7">
      <t-project-document-section
          title="Раздел 7. «Проект организации строительства">
      </t-project-document-section>
    </div>
    <div name="Section8">
      <t-project-document-section
          title="Раздел 8. «Мероприятия по охране окружающей среды»">
      </t-project-document-section>
    </div>
    <div name="Section9">
      <t-project-document-section
          title="Раздел 9. «Мероприятия по обеспечению пожарной безопасности»">
      </t-project-document-section>
    </div>
    <div name="Section10">
      <t-project-document-section
          title="Раздел 10. «Требования к обеспечению безопасной эксплуатации объектов капитального строительства»">
      </t-project-document-section>
    </div>
    <div name="Section11">
      <t-project-document-section
          title="Раздел 11. «Мероприятия по обеспечению доступа инвалидов к объекту капитального строительства»">
      </t-project-document-section>
    </div>
    <div name="Section12">
      <t-section-estimate
          title="Раздел 12. «Смета на строительство, реконструкцию, капитальный ремонт, снос объекта капитального строительства»">
      </t-section-estimate>
    </div>
    <div name="Section13">
      <t-other-documents-section
        text="Раздел 13. «Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации»"
      ></t-other-documents-section>
    </div>
  </form>
</template>

<script>
import TProjectDocumentSection from "@/components/tProjectDocumentSection.vue";
import TSection5 from "@/components/tSection5.vue";
import TSectionEstimate from "@/components/tSectionEstimate.vue";
import TOtherDocumentsSection from "@/components/tOtherDocumentsSection.vue";

export default {
  name: "tNonLinearProjectDocumentContent",
  components: {TOtherDocumentsSection, TSectionEstimate, TSection5, TProjectDocumentSection}
}
</script>

<style scoped>

</style>
