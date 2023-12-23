<template>
  <h4 name="SRO">Сведения о саморегулируемой организации</h4>
  <t-s-r-o-type></t-s-r-o-type>
</template>

<script>

import TSROType from "@/components/tSROType.vue";

export default {
  name: "tSROMembership",
  components: {TSROType}
}
</script>

<style scoped>

</style>
