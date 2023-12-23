<template>
  <div class="container d-flex flex-column align-items-center justify-content-center">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppViews/AppHeader.vue";
import AppFooter from "@/components/AppViews/AppFooter.vue";

export default {
  components: {AppFooter, AppHeader}
}
</script>
<style lang="scss">
body {
  background-color: var(--bs-dark);
}
</style>
