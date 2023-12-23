<template>
<form class="d-flex flex-column justify-content-between gap-1 align-items-center">
  <div class="input_form">
    <label for="auth_email">E-mail</label>
    <input type="email" class="border-0 bg-transparent" id="auth_email">
  </div>
  <div class="input_form">
    <label for="password">Пароль</label>
    <input type="password" id="password" class="border-0 bg-transparent">
  </div>
<div>
  <input type="checkbox" id="remember">
  <label for="remember">Запомнить меня</label>
</div>
  <button>ВХОД</button>
</form>
</template>

<script>
export default {
  name: "AuthenticationForm"
}
</script>

<style scoped>



</style>
