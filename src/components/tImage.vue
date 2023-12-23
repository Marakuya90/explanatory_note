<template>
  <label class="form-label" for="Type">
    Формат изображения</label>
  <select
      class="form-select"
      name="Type"
      id="Type"
      v-model="type">
    <option value="jpg" selected>jpg</option>
    <option value="gif">gif</option>
    <option value="png">png</option>
    <option value="jpeg">jpeg</option>
  </select>
  <input id="ImageData" type="file" accept="image/jpg, image/gif, image/png, image/jpeg">
  <label class="form-label" for="Comment">Комментарий к изображению</label>
  <textarea id="Comment">
  </textarea>
</template>

<script>
export default {
  name: "tImage",
  data() {
    return {
      type: 'jpg'
    }
  }
}
</script>

<style scoped>

</style>
