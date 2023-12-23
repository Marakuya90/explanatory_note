<template>
  <form class="d-flex flex-column justify-content-between gap-1 align-items-center"
        @submit.prevent="console.log($event)">
    <div class="input_form">
      <label for="name">Имя</label>
      <input class="border-0 bg-transparent" type="text" id="name">
    </div>
    <div class="input_form">
      <label for="lastname">Фамилия</label>
      <input class="border-0 bg-transparent" type="text" id="lastname">
    </div>
    <div class="input_form">
      <label for="registr_email">E-mail</label>
      <input class="border-0 bg-transparent" type="email" id="registr_email">
    </div>
    <div class="input_form">
      <label for="password">Пароль</label>
      <input class="border-0 bg-transparent" type="password" id="password">
    </div>
    <div class="input_form">
      <label for="confirm">Подтвердите пароль</label>
      <input class="border-0 bg-transparent" type="password" id="confirm">
    </div>
    <button>РЕГИСТРАЦИЯ</button>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm"
}
</script>

<style scoped>

</style>
