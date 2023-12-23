<template>
  <label v-if="text" class="form-label">
    {{ text }}
    <input
        class="form-control me-3"
        :type=type
        :name=name
        v-model="value">
  </label>
</template>

<script>
export default {
  name: "AppInput",
  data() {
    return {
      value: ''
  }
  },
  props: {
    type: {
      type:String,
      default: 'text'
    },
    text: String,
    name: {
      type: String,
      required: true
    }
  },
  }
</script>

<style scoped>

</style>
