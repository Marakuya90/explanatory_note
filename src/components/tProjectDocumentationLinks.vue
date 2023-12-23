<template>
<form name="EnergyEfficiencyLinks">
  <h4>{{ text }}</h4>
  <t-project-documentation-link></t-project-documentation-link>
</form>
</template>

<script>
import TProjectDocumentationLink from "@/components/tProjectDocumentationLink.vue";

export default {
  name: "tProjectDocumentationLinks",
  components: {TProjectDocumentationLink},
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
