<template>
  <form name="ComplexPart">
  <app-input name="ObjectID"
             text="Идентификатор объекта (части сложного объекта)">
  </app-input>
  <app-input name="Name"
             text="Наименование объекта капитального строительства, входящего в состав сложного объекта">
  </app-input>
    <app-input name="Address"
               text="Почтовый (строительный) адрес (местоположение) объекта капитального строительства">
    </app-input>
  <div name="FunctionsClass">
  <t-functions-class-group></t-functions-class-group>
  </div>
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
    <t-danger-industrial-class
      text="Принадлежность к опасным производственным объектам"
    ></t-danger-industrial-class>
<!--    <t-object-parts-->
<!--      text="Составные части сложного объекта"-->
<!--    ></t-object-parts>-->

  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TFunctionsClassGroup from "@/components/tFunctionsClassGroup.vue";
import TTextBlock from "@/components/tTextBlock.vue";
import TTEI from "@/components/tTEI.vue";
import TDangerIndustrialClass from "@/components/tDangerIndustrialClass.vue";
// import TObjectParts from "@/components/tObjectParts.vue";

export default {
  name: "tComplexPart",
  components: {TDangerIndustrialClass, TTEI, TTextBlock, TFunctionsClassGroup, AppInput}
}
</script>

<style scoped>

</style>
