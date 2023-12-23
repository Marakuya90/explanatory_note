<template>
  <form name="StateCustomerSource">
    <h4>Сведения об источнике финансирования (Средства юридических лиц, перечисленных в части 2 статьи 8.3 Градостроительного кодекса Российской Федерации)</h4>
  <div name="Owner">
  <technical-customer
  text="Юридическое лицо - владелец средств"
  ></technical-customer>
  </div>
  <app-input
      text="Размер финансирования (доля в процентах)"
      name="SourceRatio"
  ></app-input>
  </form>
</template>

<script>
import TechnicalCustomer from "@/App.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tStateCustomerSource",
  components: {AppInput, TechnicalCustomer}
}
</script>

<style scoped>

</style>
