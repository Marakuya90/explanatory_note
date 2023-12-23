<template>
  <form name="UsedAbbreviations">
  <div class="card p-3 d-flex gap-2">
    <t-text-block
    title="Список используемых сокращений"
    ></t-text-block>
  </div>
  </form>
</template>

<script>
import TTextBlock from "@/components/tTextBlock.vue";

export default {
  name: "UsedAbbreviations",
  components: {TTextBlock}
}
</script>

<style scoped>

</style>
