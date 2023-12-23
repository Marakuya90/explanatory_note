<template>
  <form name="PrivateSource">
    <h4>Сведения об источнике финансирования (Средства, не входящие в перечень, указанный в части 2 статьи 8.3 Градостроительного кодекса Российской Федерации)</h4>
  <app-input
      text="Размер финансирования (доля в процентах)"
      name="SourceRatio"
  ></app-input>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tPrivateSource",
  components: {AppInput}
}
</script>

<style scoped>

</style>
