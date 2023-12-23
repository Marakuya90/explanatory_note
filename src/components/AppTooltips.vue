<template>
  <i class="bi bi-info-circle align-self-center" data-bs-toggle="tooltip" :data-bs-title="textTooltips"></i>
</template>

<script>

export default {
  name: "AppTooltips",
  props: {
    textTooltips: String
  }
}
</script>

<style scoped>

</style>
