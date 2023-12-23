<template>
<form name="Model">
  <label for="Description" id="Description">{{ text }}</label>
  <textarea name="Description"></textarea>
  <t-model-file></t-model-file>
</form>
</template>

<script>
import TModelFile from "@/components/tModelFile.vue";

export default {
  name: "tModel",
  components: {TModelFile},
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
