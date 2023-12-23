<template>
  <tr>
    <t-cell
        :type = this.type
    ></t-cell>
  </tr>
</template>

<script>
import TCell from "@/components/tCell.vue";

export default {
  name: "tRow",
  components: {TCell},
  props: {
    type: {
      type: String,
      default: 'Row'
    }
  }
}
</script>

<style scoped>

</style>
