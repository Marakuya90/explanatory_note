<template>
  <form name="tTEI">
  <app-input name="Name"
           text="Наименование показателя"></app-input>
  <t-o-k-e-i></t-o-k-e-i>
  <app-input name="Value"
             text="Значение показателя"></app-input>
  <app-input name="OldValue"
             text="Предыдущее значение показателя (при реконструкции)"></app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TOKEI from "@/components/tOKEI.vue";

export default {
  name: "tTEI",
  components: {TOKEI, AppInput}
}
</script>

<style scoped>

</style>
