<template>
  <header class="row mb-5">
    <div class="col-12">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Explanatory Note</a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success me-3" type="submit" @click = UserService.doLogout>Search</button>
            <button class="btn btn-outline-dark" type="submit">Выйти</button>
          </form>
        </div>
      </nav>
      <ul class="nav justify-content-center">
        <li class="nav-item active">
          <router-link class="nav-link active" aria-current="page" to="/basicinfo">Основная информация</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/basicinfo">Участники</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/basicinfo">Сведения о документации</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/basicinfo">Финансирование</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/basicinfo">Проектная документация</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/basicinfo">Файлы</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

import UserService from "@/services/UserService.js";

export default {
  name: "AppHeader",
  computed: {
    UserService() {
      return UserService
    }
  }
}
</script>

<style scoped>

</style>