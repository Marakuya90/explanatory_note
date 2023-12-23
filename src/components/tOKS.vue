<template>
<app-input name="ObjectID"
           text="Идентификатор объекта (части сложного объекта)"></app-input>
  <app-input name="Name"
             text="Наименование объекта капитального строительства, входящего в состав сложного объекта"></app-input>
  <app-input name="Address"
             text="Почтовый (строительный) адрес (местоположение) объекта капитального строительства"></app-input>
  <t-functions-class-group></t-functions-class-group>
  <div name="FunctionsFeatures">
    <t-text-block title="Принадлежность к объектам транспортной инфраструктуры и к другим объектам,
    функционально- технологические особенности которых влияют на их безопасность"></t-text-block>
  </div>
  <div name="PowerIndicator">
    <h4>Данные о проектной мощности объекта капитального строительства</h4>
    <t-t-e-i></t-t-e-i>
  </div>
  <div name="TEI">
    <h4>Технико-экономический показатель объекта капитального строительства</h4>
    <t-t-e-i></t-t-e-i>
  </div>
  <t-energy-efficiency></t-energy-efficiency>
  <t-danger-industrial-class text="Принадлежность к опасным производственным
объектам"></t-danger-industrial-class>
  <t-fire-danger-category></t-fire-danger-category>
  <div name="PeoplePermanentStay">
    <t-text-block title="Сведения о наличии помещений с постоянным
пребыванием людей"></t-text-block>
  </div>
  <t-responsibility-level></t-responsibility-level>
  <t-model
    text="Представление модели части объекта"
  ></t-model>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFunctionsClassGroup from "@/components/tFunctionsClassGroup.vue";
import TTextBlock from "@/components/tTextBlock.vue";
import TTEI from "@/components/tTEI.vue";
import TEnergyEfficiency from "@/components/tEnergyEfficiency.vue";
import TDangerIndustrialClass from "@/components/tDangerIndustrialClass.vue";
import TFireDangerCategory from "@/components/tFireDangerCategory.vue";
import TResponsibilityLevel from "@/components/tResponsibilityLevel.vue";
import TModel from "@/components/tModel.vue";

export default {
  name: "tOKS",
  components: {
    TModel,
    TResponsibilityLevel,
    TFireDangerCategory,
    TDangerIndustrialClass, TEnergyEfficiency, TTEI, TTextBlock, TFunctionsClassGroup, AppInput}
}
</script>

<style scoped>

</style>
