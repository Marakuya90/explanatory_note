<template>
  <label
      for="DangerousIndustrialClass">
    {{ text }}
  </label>
<section
    name="DangerousIndustrialClass"
    id="DangerousIndustrialClass">
  <option></option>
</section>
</template>

<script>
export default {
  name: "tDangerIndustrialClass",
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
