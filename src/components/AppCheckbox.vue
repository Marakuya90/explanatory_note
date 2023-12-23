<template>
  <div class="form-check">
    <input
        class="form-check-input"
        type="radio"
        :name="name"
        :id='uniqueName'
        :value=valueYes
        checked >

    <label class="form-check-label" :for=uniqueName>
      {{ valueYes }}
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" :name="name" :id='uniqueName2' :value=valueNo>
    <label class="form-check-label" :for=uniqueName2>
      {{ valueNo }}
    </label>
  </div>
</template>

<script>
export default {
  name: "AppCheckbox",
  props: {
    valueYes: String,
    valueNo: String,
    name: String
  },
  computed: {
      uniqueName() {
        return this.name + Math.random()
    },
      uniqueName2() {
        return this.name + Math.random()
      }
  }
}
</script>

<style scoped>

</style>
