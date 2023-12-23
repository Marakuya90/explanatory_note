<template>
  <form action="ObjectParts">
    <h4>{{ text }}</h4>
    <t-complex-part></t-complex-part>
    <t-o-k-s></t-o-k-s>
  </form>
</template>

<script>
import TComplexPart from "@/components/tComplexPart.vue";
import TOKS from "@/components/tOKS.vue";

export default {
  name: "tObjectParts",
  components: {TOKS, TComplexPart},
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
