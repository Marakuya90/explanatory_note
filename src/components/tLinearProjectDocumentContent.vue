<template>
  <form name="LinearProjectDocumentContent">
    <h4>Сведения о составе проектной документации объекта непроизводственного назначения</h4>
    <div name="Section2">
      <t-project-document-section
          title="Раздел 2. «Проект полосы отвода»">
      </t-project-document-section>
    </div>
    <div name="Section3">
      <t-project-document-section
          title="Раздел 3. «Технологические и конструктивные решения линейного объекта. Искусственные сооружения»"></t-project-document-section>
    </div>
    <div name="Section4">
      <t-project-document-section
          title="Раздел 4. «Здания, строения и сооружения, входящие в инфраструктуру линейного объекта»"></t-project-document-section>
    </div>
    <div name="Section5">
      <t-project-document-section title="Раздел 5. «Проект организации строительства»"></t-project-document-section>
    </div>
    <div name="Section6">
      <t-project-document-section
          title="Раздел 6. «Мероприятия по охране окружающей среды»"></t-project-document-section>
    </div>
    <div name="Section7">
      <t-project-document-section
          title="Раздел 7. «Мероприятия по обеспечению пожарной безопасности»">
      </t-project-document-section>
    </div>
    <div name="Section8">
      <t-project-document-section
          title="Раздел 8. «Требования к обеспечению безопасной эксплуатации линейного объекта»">
      </t-project-document-section>
    </div>
    <div name="Section9">
      <t-section-estimate
          title="Раздел 9. «Смета на строительство, реконструкцию, капитальный ремонт,
   снос объекта капитального строительства»">
      </t-section-estimate>
    </div>
    <div name="Section10">
      <t-other-documents-section
          text="Раздел 10. «Иная документация в случаях, предусмотренных законодательными и иными
      нормативными правовыми актами Российской Федерации»"
      ></t-other-documents-section>
    </div>
  </form>
</template>

<script>
import TProjectDocumentSection from "@/components/tProjectDocumentSection.vue";
import TSectionEstimate from "@/components/tSectionEstimate.vue";
import TOtherDocumentsSection from "@/components/tOtherDocumentsSection.vue";

export default {
  name: "tLinearProjectDocumentContent",
  components: {TOtherDocumentsSection, TSectionEstimate, TProjectDocumentSection}
}
</script>

<style scoped>

</style>
