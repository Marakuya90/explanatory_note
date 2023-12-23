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
      text="Должность"
      type="text"
      name="Position"
  ></app-input>
  <div>
    <h4>Сведения о включении в реестр специалистов в области инженерных изысканий и архитектурно-строительного проектирования</h4>
    <app-checkbox
        name="engineeringRegistry"
        value-yes="Да"
        value-no="Нет"
    ></app-checkbox>
  </div>

  <div>
    <h4>Сведения о включении в реестр специалистов в области строительства</h4>
    <app-checkbox
        name="constructionRegistry"
        value-yes="Да"
        value-no="Нет"
    ></app-checkbox>
  </div>
</template>

<script>
import AppCheckbox from "@/components/AppCheckbox.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tWorkPerson",
  components: {AppInput, AppCheckbox}
}
</script>

<style scoped>

</style>
