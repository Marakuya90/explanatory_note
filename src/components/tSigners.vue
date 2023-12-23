<template>
<div class="card p-3 d-flex gap-2d" name="Signers">
  <h4 class="form-label">Сведения о лицах, подписавших документацию</h4>
  <t-work-person></t-work-person>
</div>
</template>

<script>
import TWorkPerson from "@/components/tWorkPerson.vue";

export default {
  name: "tSigners",
  components: {TWorkPerson}
}
</script>

<style scoped>

</style>
