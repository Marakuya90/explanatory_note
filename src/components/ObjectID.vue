<template>
  <form name="ObjectID">
    <app-input
        text="Идентификатор объекта (части сложного объекта)"
        name="ObjectID"></app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "ObjectID",
  components: {AppInput}
}
</script>

<style scoped>

</style>
