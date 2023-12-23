<template>
  <form name="Resource">
    <app-input name="Name"
               text="Наименование необходимого ресурса">
    </app-input>
    <div name="Measure">
      <t-o-k-e-i></t-o-k-e-i>
    </div>
    <app-input name="Volume"
               text="Необходимый объем ресурса">
    </app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TOKEI from "@/components/tOKEI.vue";

export default {
  name: "tResource",
  components: {TOKEI, AppInput}
}
</script>

<style scoped>

</style>
