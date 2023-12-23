<template>
  <form action="NonIndustrialObject">
    <h4>Описание объекта капитального строительства непроизводственного назначения</h4>
    <object-i-d></object-i-d>
    <t-placement></t-placement>
    <t-dangerous-and-complex></t-dangerous-and-complex>
    <t-unique></t-unique>
    <app-input name="Name"
               text="Наименование объекта капитального строительства">
    </app-input>
    <t-construction-type></t-construction-type>
    <app-input name="ConstructionDuration"
               text="Продолжительность работ,месяц">
    </app-input>
    <t-construction-dates></t-construction-dates>
    <div name="Address">
      <t-address
        text="Почтовый (строительный) адрес объекта капитального строительства или местоположение">
      </t-address>
    </div>
    <t-functions></t-functions>
    <div name="FunctionsFeatures">
      <t-text-block
          title="Сведения о принадлежности к объектам транспортной инфраструктуры и к другим объектам, функционально- технологические особенности которых влияют на их безопасность"
      ></t-text-block>
    </div>
    <div name="PowerIndicator">
      <h4>Данные о проектной мощности объекта капитального строительства</h4>
      <t-t-e-i></t-t-e-i>
    </div>
    <div name="TEI">
      <h4>Технико-экономические показатели проектируемых объектов капитального строительства</h4>
      <t-t-e-i></t-t-e-i>
    </div>
    <t-energy-efficiency></t-energy-efficiency>
    <t-fire-danger-category></t-fire-danger-category>
    <div name="PeoplePermanentStay">
      <t-text-block
          title="Сведения об использовании возобновляемых источников энергии и вторичных энергетических ресурсов">
      </t-text-block>
    </div>
    <t-land-category></t-land-category>
    <t-land-info></t-land-info>
    <div name="LandFunds">
      <t-text-block title="Сведения о размере средств, требующихся для
возмещения убытков правообладателям земельных участков и (или) для внесения в качестве арендной платы, платы за сервитут, публичный сервитут и (или) для выкупа земельных участков, - в случаях, установленных законодательством Российской Федерации">
      </t-text-block>
    </div>
    <div name="PatentsUsed">
      <t-text-block title="Сведения об использованных в проекте
изобретениях, результатах проведенных патентных исследований">
      </t-text-block>
    </div>
    <div name="SpecialRequirements">
      <t-text-block title="Сведения о наличии разработанных и согласованных специальных технических условий - в случае необходимости разработки таких условий">
      </t-text-block>
    </div>
    <div name="StaffNote">
      <t-text-block
          title="Сведения о численности
работников и их профессионально- квалификационном составе, числе рабочих мест (кроме жилых зданий)">
      </t-text-block>
    </div>
    <t-software-used></t-software-used>
    <t-stages-info></t-stages-info>
    <div name="DestroyFunds">
    <t-text-block title="Сведения о предполагаемых затратах, связанных со
сносом зданий и сооружений, переселением людей, переносом сетей инженерно-технического обеспечения"></t-text-block>
    </div>
    <t-project-documentation-links
      text="Сведения о разделах и пунктах проектной документации, содержащих решения и мероприятия по обеспечению
      соблюдения требований энергетической эффективности и оснащенности зданий, строений, сооружений приборами
      учета используемых энергетических ресурсов"
    ></t-project-documentation-links>
    <div name="LandReclamationLink">
      <t-text-block
          title="Сведения о наличии проекта рекультивации
    земель">
      </t-text-block>
    </div>
    <div name="ProjectDocumentation">
      <t-non-linear-project-document-content>
      </t-non-linear-project-document-content>
    </div>
    <div name="Model">
      <t-model
        text="Представление модели объекта"
      ></t-model>
    </div>

  </form>
</template>

<script>
import ObjectID from "@/components/ObjectID.vue";
import TPlacement from "@/components/tPlacement.vue";
import TDangerousAndComplex from "@/components/tDangerousAndComplex.vue";
import TUnique from "@/components/tUnique.vue";
import AppInput from "@/components/AppInput.vue";
import TConstructionType from "@/components/tConstructionType.vue";
import TConstructionDates from "@/components/tConstructionDates.vue";
import TAddress from "@/components/tAddress.vue";
import TFunctions from "@/components/tFunctions.vue";
import TTextBlock from "@/components/tTextBlock.vue";
import TTEI from "@/components/tTEI.vue";
import TEnergyEfficiency from "@/components/tEnergyEfficiency.vue";
import TFireDangerCategory from "@/components/tFireDangerCategory.vue";
import TLandCategory from "@/components/tLandCategory.vue";
import TLandInfo from "@/components/tLandInfo.vue";
import TSoftwareUsed from "@/components/tSoftwareUsed.vue";
import TStagesInfo from "@/components/tStagesInfo.vue";
import TProjectDocumentationLinks from "@/components/tProjectDocumentationLinks.vue";
import TNonLinearProjectDocumentContent from "@/components/tNonLinearProjectDocumentContent.vue";
import TModel from "@/components/tModel.vue";

export default {
  name: "tNonIndustrialObject",
  components: {
    TModel,
    TNonLinearProjectDocumentContent,
    TProjectDocumentationLinks,
    TStagesInfo,
    TSoftwareUsed,
    TLandInfo,
    TLandCategory,
    TFireDangerCategory,
    TEnergyEfficiency,
    TTEI,
    TTextBlock,
    TFunctions,
    TAddress,
    TConstructionDates, TConstructionType, AppInput, TUnique, TDangerousAndComplex, TPlacement, ObjectID}
}
</script>

<style scoped>

</style>
