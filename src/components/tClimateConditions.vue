<template>
  <form name="ClimateConditions">
    <h4>Сведения о климатической, географической и инженерно-геологической характеристике района,
      на территории которого предполагается осуществлять строительство (реконструкцию, капитальный
      ремонт, снос) объекта капитального строительства</h4>
    <div name="ClimateNote">
      <t-text-block title="Сведения о климатической, географической и инженерно-геологической характеристике района,
       на территории которого предполагается осуществлять строительство (реконструкцию, капитальный ремонт, снос)"></t-text-block>
    </div>
    <t-climate-district></t-climate-district>
    <t-geological-conditions></t-geological-conditions>
    <t-wind-district></t-wind-district>
    <t-snow-district></t-snow-district>
    <t-seismic-activity></t-seismic-activity>
  </form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";
import TClimateDistrict from "@/components/tClimateDistrict.vue";
import TGeologicalConditions from "@/components/tGeologicalConditions.vue";
import TWindDistrict from "@/components/tWindDistrict.vue";
import TSnowDistrict from "@/components/tSnowDistrict.vue";
import TSeismicActivity from "@/components/tSeismicActivity.vue";

export default {
  name: "tClimateConditions",
  components: {TSeismicActivity, TSnowDistrict, TWindDistrict, TGeologicalConditions, TClimateDistrict, TTextBlock}
}
</script>

<style scoped>

</style>
