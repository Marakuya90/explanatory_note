<template>
  <div class="d-flex">
  <app-input
      :text=this.textEmail
      name="Email"
      type="email"
  ></app-input>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
export default {
  name: "tEmail",
  components: {AppInput},
  props: {
    textEmail: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      container: {email: new Map},
      containerName: 'Email',
      inputCount:1
    }
  }
}
</script>

<style scoped>

</style>
