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
  <app-input
      text="Основной государственный регистрационный номер индивидуального предпринимателя"
      type="number"
      name="OGRNIP"
  ></app-input>
  <t-post-address></t-post-address>
  <t-email
      text-email="Адрес электронной почты индивидуального предпринимателя"
  ></t-email>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TEmail from "@/components/tEmail.vue";
import TPostAddress from "@/components/tPostAddress.vue";

export default {
  name: "tIP",
  components: {TPostAddress, TEmail, AppInput}
}
</script>

<style scoped>

</style>
