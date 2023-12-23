<template>
<form name="IndustrialObject">
  <h4>Описание объекта капитального строительства
    производственного назначения</h4>
  <app-input name="ObjectID"
             text="Идентификатор объекта (части сложного объекта)"></app-input>
  <t-placement></t-placement>
  <t-dangerous-and-complex></t-dangerous-and-complex>
  <t-unique></t-unique>
  <app-input name="Name"
             text="Наименование объекта капитального строительства"></app-input>
  <t-construction-type></t-construction-type>
  <app-input name="ConstructionDuration"
  text="Продолжительность работ, месяц">
  </app-input>
  <t-construction-dates></t-construction-dates>
  <div name="Address">
    <h4>Почтовый (строительный) адрес объекта
      капитального строительства или местоположение
      (адрес начального пункта для линейного объекта)
    </h4>
    <t-address
      text="Почтовый (строительный) адрес объекта капитального строительства или местоположение (адрес начального пункта для линейного объекта)"
    ></t-address>
  </div>
  <t-functions></t-functions>
  <div name="FunctionsFeatures">
    <t-text-block title="Сведения о принадлежности к объектам транспортной
    инфраструктуры и к другим объектам, функционально- технологические
    особенности которых влияют на их безопасность"></t-text-block>
  </div>
  <div name="PowerIndicator">
    <t-t-e-i></t-t-e-i>
  </div>
  <div name="TEI">
    <t-t-e-i></t-t-e-i>
  </div>
  <t-energy-efficiency></t-energy-efficiency>
  <div name="DangerousIndustrialObject">
    <t-danger-industrial-class
        text="Класс опасности опасного производственного объекта"
    ></t-danger-industrial-class>
  </div>
  <t-fire-danger-category></t-fire-danger-category>
  <div name="PeoplePermanentStay">
    <t-text-block title="Сведения о наличии помещений с постоянным пребыванием людей"></t-text-block>
  </div>
  <t-responsibility-level></t-responsibility-level>
  <t-object-parts
    text="Сведения о составных частях объекта, в случае если объект сложный"
  ></t-object-parts>
  <t-climate-conditions></t-climate-conditions>
  <t-resources
      text="Сведения о потребности объекта капитального строительства в топливе,
       газе, воде и электрической энергии"
  ></t-resources>
  <div name="RawResources">
    <t-resources text="Сведения о потребностях производства в сырьевых ресурсах
    и источниках их поступления, потребности производства в воде, топливно-энергетических ресурсах"></t-resources>
  </div>
  <div name="ResourceUseInfo">
    <t-text-block title="Сведения о комплексном использовании сырья, вторичных энергоресурсов,
    отходов производства"></t-text-block>
  </div>
  <div name="RenewableSourceInfo">
    <t-text-block title="Сведения об использовании возобновляемых
источников энергии и вторичных энергетических ресурсов"></t-text-block>
  </div>
  <t-land-category></t-land-category>
  <t-land-info></t-land-info>
  <div name="LandFunds">
    <t-text-block
        title="Сведения о размере средств, требующихся для
          возмещения убытков правообладателям земельных участков и (или) для
          внесения в качестве арендной платы, платы за сервитут, публичный сервитут
          и (или) для выкупа земельных участков, - в случаях, установленных законодательством
          Российской Федерации"></t-text-block>
  </div>
  <div name="PatentsUsed">
    <t-text-block title="Сведения об использованных в проекте изобретениях,
    результатах проведенных патентных исследований"></t-text-block>
  </div>
  <div name="SpecialRequirements">
    <t-text-block title="Сведения о наличии разработанных и
согласованных специальных технических условий - в случае необходимости разработки таких условий">
    </t-text-block>
  </div>
  <t-software-used></t-software-used>
  <t-stages-info></t-stages-info>
  <div name="DestroyFunds">
    <t-text-block title="Сведения о предполагаемых затратах, связанных со
    сносом зданий и сооружений, переселением людей, переносом сетей инженерно-технического обеспечения"></t-text-block>
  </div>
  <div name="EnergyEfficiencyLinks">
    <t-project-documentation-links
        text="Сведения о разделах и пунктах проектной
      документации, содержащих решения и мероприятия по обеспечению соблюдения требований
      энергетической эффективности и оснащенности зданий, строений, сооружений приборами
      учета используемых энергетических ресурсов"
    ></t-project-documentation-links>
  </div>
  <div name="IndustrialSafetyLinks">
    <t-project-documentation-links
      text="Сведения о разделах и пунктах проектной
    документации, содержащих решения и мероприятия по обеспечению соблюдения требований
    промышленной безопасности - для опасных производственных объектов"
    ></t-project-documentation-links>
  </div>
  <div name="LandReclamationLink">
    <t-text-block
        title="Сведения о наличии проекта рекультивации
    земель">
    </t-text-block>
  </div>
  <t-nuclear-plant-features></t-nuclear-plant-features>
  <div name="ProjectDocumentation">
    <h4>Сведения о составе проектной документации объекта производственного назначения</h4>
    <t-non-linear-project-document-content></t-non-linear-project-document-content>
    <t-model text="Представление модели объекта"></t-model>
  </div>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TPlacement from "@/components/tPlacement.vue";
import TDangerousAndComplex from "@/components/tDangerousAndComplex.vue";
import TUnique from "@/components/tUnique.vue";
import TConstructionType from "@/components/tConstructionType.vue";
import TConstructionDates from "@/components/tConstructionDates.vue";
import TAddress from "@/components/tAddress.vue";
import TFunctions from "@/components/tFunctions.vue";
import TTextBlock from "@/components/tTextBlock.vue";
import TTEI from "@/components/tTEI.vue";
import TEnergyEfficiency from "@/components/tEnergyEfficiency.vue";
import TDangerIndustrialClass from "@/components/tDangerIndustrialClass.vue";
import TFireDangerCategory from "@/components/tFireDangerCategory.vue";
import TResponsibilityLevel from "@/components/tResponsibilityLevel.vue";
import TObjectParts from "@/components/tObjectParts.vue";
import TClimateConditions from "@/components/tClimateConditions.vue";
import TResources from "@/components/tResources.vue";
import TLandCategory from "@/components/tLandCategory.vue";
import TLandInfo from "@/components/tLandInfo.vue";
import TSoftwareUsed from "@/components/tSoftwareUsed.vue";
import TStagesInfo from "@/components/tStagesInfo.vue";
import TProjectDocumentationLinks from "@/components/tProjectDocumentationLinks.vue";
import TNuclearPlantFeatures from "@/components/tNuclearPlantFeatures.vue";
import TNonLinearProjectDocumentContent from "@/components/tNonLinearProjectDocumentContent.vue";
import TModel from "@/components/tModel.vue";

export default {
  name: "tIndustrialObject",
  components: {
    TModel,
    TNonLinearProjectDocumentContent,
    TNuclearPlantFeatures,
    TProjectDocumentationLinks,
    TStagesInfo,
    TSoftwareUsed,
    TLandInfo,
    TLandCategory,
    TResources,
    TClimateConditions,
    TObjectParts,
    TResponsibilityLevel,
    TFireDangerCategory,
    TDangerIndustrialClass,
    TEnergyEfficiency,
    TTEI,
    TTextBlock,
    TFunctions,
    TAddress, TConstructionDates, TConstructionType, TUnique, TDangerousAndComplex, TPlacement, AppInput}
}
</script>

<style scoped>

</style>
