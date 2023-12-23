<template>
  <label class="form-label" for="Region">
    Код субъекта Российской Федерации</label>
    <select
        class="form-select"
        name="Region"
        id="Region"
        v-model="region"
    >{{ region }}
      <!--      итерация по store.state.region-->
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
</template>

<script>

export default {
  name: "tRegionsRF",
  data() {
    return {
      region: ''
    }
  }
}
</script>

<style scoped>

</style>
