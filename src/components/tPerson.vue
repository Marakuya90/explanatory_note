<template>
  <app-input
      text="Фамилия"
      type="text"
      name="FamilyName"
  ></app-input>
  <app-input
      text="Имя"
      type="text"
      name="FirstName"
  ></app-input>
  <app-input
      text="Отчество"
      type="text"
      name="SecondName"
  ></app-input>
  <t-s-n-i-l-s></t-s-n-i-l-s>
  <t-email></t-email>
  <t-post-address></t-post-address>
</template>

<script>
import TPostAddress from "@/components/tPostAddress.vue";
import TEmail from "@/components/tEmail.vue";
import TSNILS from "@/components/tSNILS.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tPerson",
  components: {TSNILS, TEmail, TPostAddress, AppInput}
}
</script>

<style scoped>

</style>
