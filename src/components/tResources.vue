<template>
<form name="Resources">
  <h4>{{ text }}</h4>
  <app-input name="Note"
  text="Общие сведения о необходимых ресурсах, сырьевой базе.">
  </app-input>
<t-resource></t-resource>
</form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TResource from "@/components/tResource.vue";

export default {
  name: "tResources",
  components: {TResource, AppInput},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
