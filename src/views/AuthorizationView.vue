<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div class="authorization">
      <div>
        <button @click="registration = false" class="authorization_button">ВХОД</button>
        <button @click="registration = true" class="authorization_button">РЕГИСТРАЦИЯ</button>
      </div>
      <registration-form v-if="registration === true"></registration-form>
      <authentication-form v-else></authentication-form>
    </div>
  </div>


</template>

<script>
import RegistrationForm from "@/components/AppViews/RegistrationForm.vue";
import AuthenticationForm from "@/components/AppViews/AuthenticationForm.vue";

export default {
  name: "AppAuthorization",
  components: {AuthenticationForm, RegistrationForm},
  data() {
    return {
      registration: true
    }
  }
}
</script>

<style scoped>

</style>
