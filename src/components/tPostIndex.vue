<template>
  <label class="form-label" for="PostIndex">
    Почтовый индекс</label>
    <select
        class="form-select"
        type="text"
        name="PostIndex"
        id="PostIndex"
    >
      <!--      итерация по store.state.region-->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
</template>

<script>
export default {
  name: "tPostIndex"
}
</script>

<style scoped>

</style>
