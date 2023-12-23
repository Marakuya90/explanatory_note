<template>
  <form name="LinearObject">
    <h4>Описание линейного объекта капитального строительства</h4>
    <app-input name="ObjectID"
               text="Идентификатор объекта (части сложного объекта)"></app-input>
    <t-placement></t-placement>
    <t-dangerous-and-complex></t-dangerous-and-complex>
    <t-unique></t-unique>
    <app-input name="Name"
               text="Наименование объекта капитального строительства"></app-input>
    <t-construction-type></t-construction-type>
    <app-input name="ConstructionDuration"
               text="Продолжительность работ, месяц"></app-input>
    <t-construction-dates></t-construction-dates>
    <div name="Address">
      <t-address
          text="Адрес начального пункта линейного объекта"
      ></t-address>
    </div>
    <div name="FinishAddress">
      <t-address
          text="Адрес конечного пункта линейного объекта"
      ></t-address>
    </div>
    <t-functions></t-functions>
    <div name="FunctionsFeatures">
    <t-text-block
        title="Сведения о принадлежности к объектам транспортной инфраструктуры
     и к другим объектам, функционально- технологические особенности которых влияют на их безопасность"></t-text-block>
    </div>
    <div name="PowerIndicator">
      <p>Данные о проектной мощности объекта капитального строительства</p>
      <t-t-e-i></t-t-e-i>
    </div>
    <div name="TEI">
      <p>Технико-экономические показатели проектируемых объектов капитального строительства</p>
      <t-t-e-i></t-t-e-i>
    </div>
    <div name="DangerousIndustrialObject">
      <t-danger-industrial-class
          text="Класс опасности опасного производственного объекта">
      </t-danger-industrial-class>
    </div>
    <div name="LinearObjectCategory">
      <t-text-block title="Сведения о категории линейного объекта"></t-text-block>
    </div>
    <div name="LinearObjectClass">
      <t-text-block
          title="Сведения о классе линейного объекта">
      </t-text-block>
    </div>
    <div name="LinearObjectNote">
      <t-text-block
          title="Сведения о линейном объекте">
      </t-text-block>
    </div>
    <t-fire-danger-category></t-fire-danger-category>
    <div name="PeoplePermanentStay">
      <t-text-block
          title="Сведения о наличии помещений с постоянным пребыванием людей">
      </t-text-block>
    </div>
    <t-responsibility-level></t-responsibility-level>
    <t-object-parts text="Сведения о составных частях объекта, в случае если объект сложный"></t-object-parts>
    <t-climate-conditions></t-climate-conditions>
    <t-routes></t-routes>
    <t-resources text="Сведения о потребности объекта капитального строительства в топливе,
     газе, воде и электрической энергии"></t-resources>
    <div name="ResourceUseInfo">
      <t-text-block title="Сведения о комплексном использовании сырья, вторичных энергоресурсов,
       отходов производства"></t-text-block>
    </div>
    <div name="RenewableSourceInfo">
      <t-text-block title="Сведения об использовании возобновляемых источников энергии и вторичных
      энергетических ресурсов"></t-text-block>
    </div>
    <t-land-category></t-land-category>
    <t-land-info></t-land-info>
    <div name="PatentsUsed">
      <t-text-block title="Сведения об использованных в проекте изобретениях, результатах
      проведенных патентных исследований"></t-text-block>
    </div>
    <div name="SpecialRequirements">
      <t-text-block title="Сведения о наличии разработанных и согласованных специальных
      технических условий - в случае необходимости разработки таких условий"></t-text-block>
    </div>
    <t-software-used></t-software-used>
    <t-stages-info></t-stages-info>
    <div name="DestroyFunds">
      <t-text-block title="Сведения о предполагаемых затратах, связанных со сносом зданий
       и сооружений, переселением людей, переносом сетей инженерно-технического обеспечения
        этапов не должны повтояться."></t-text-block>
    </div>
    <div name="IndustrialSafetyLinks">
      <t-project-documentation-links text="Сведения о разделах и пунктах проектной документации,
       содержащих решения и мероприятия по обеспечению соблюдения требований промышленной безопасности
        - для опасных производственных объектов"></t-project-documentation-links>
    </div>
    <div name="LandReclamationLink">
      <t-text-block title="Сведения о наличии проекта рекультивации земель"></t-text-block>
    </div>
  <t-gas-networks-features></t-gas-networks-features>
    <div name="EngineeringTerritoryProtection">
      <t-text-block title="Описание принципиальных проектных решений по инженерной защите
      территории при строительстве, реконструкции автомобильных дорог"></t-text-block>
    </div>
    <div name="ProjectDocumentation">
      <t-linear-project-document-content></t-linear-project-document-content>
    </div>
    <t-model text="Представление модели объекта"></t-model>
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
import TDangerIndustrialClass from "@/components/tDangerIndustrialClass.vue";
import TFireDangerCategory from "@/components/tFireDangerCategory.vue";
import TResponsibilityLevel from "@/components/tResponsibilityLevel.vue";
import TObjectParts from "@/components/tObjectParts.vue";
import TClimateConditions from "@/components/tClimateConditions.vue";
import TRoutes from "@/components/tRoutes.vue";
import TResources from "@/components/tResources.vue";
import TLandCategory from "@/components/tLandCategory.vue";
import TLandInfo from "@/components/tLandInfo.vue";
import TSoftwareUsed from "@/components/tSoftwareUsed.vue";
import TStagesInfo from "@/components/tStagesInfo.vue";
import TProjectDocumentationLinks from "@/components/tProjectDocumentationLinks.vue";
import TGasNetworksFeatures from "@/components/tGasNetworksFeatures.vue";
import TLinearProjectDocumentContent from "@/components/tLinearProjectDocumentContent.vue";
import TModel from "@/components/tModel.vue";

export default {
  name: "tLinearObject",
  components: {
    TModel,
    TLinearProjectDocumentContent,
    TGasNetworksFeatures,
    TProjectDocumentationLinks,
    TStagesInfo,
    TSoftwareUsed,
    TLandInfo,
    TLandCategory,
    TResources,
    TRoutes,
    TClimateConditions,
    TObjectParts,
    TResponsibilityLevel,
    TFireDangerCategory,
    TDangerIndustrialClass,
    TTEI,
    TTextBlock,
    TFunctions,
    TAddress, TConstructionDates, TConstructionType, TUnique, TDangerousAndComplex, TPlacement, AppInput}
}
</script>

<style scoped>

</style>
