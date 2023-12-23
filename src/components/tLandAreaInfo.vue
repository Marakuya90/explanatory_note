<template>
<form name="LandAreaInfo">
  <app-input name="CadastralNumber"
             text="Кадастровый номер участка">
  </app-input>
<t-land-category></t-land-category>
  <app-input name="UsingNote"
             text="Обоснования действия с земельным участком (изъятие, установление сервитута), дополнительные сведения об участке">
  </app-input>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TLandCategory from "@/components/tLandCategory.vue";

export default {
  name: "tLandAreaInfo",
  components: {TLandCategory, AppInput}
}
</script>

<style scoped>

</style>
