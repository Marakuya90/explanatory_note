<template>
  <img v-if="data" :src="data.message" />
</template>

<script>
import testvuequery from "@/composables/testvuequery";


export default {
  name: "testVueQuery",
  setup() {
    const { data } = testvuequery();

    return { data };
  }
}
</script>

<style scoped>

</style>
