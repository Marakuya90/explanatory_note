<template>
  <form name="Route">
    <app-input name="Name"
               text="Наименование или идентификатор варианта маршрута"></app-input>
    <div name="Note">
      <t-text-block title="Описание варианта маршрута прохождения
      линейного объекта по территории района строительства (реконструкции)"></t-text-block>
    </div>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TTextBlock from "@/components/tTextBlock.vue";

export default {
  name: "tRoute",
  components: {TTextBlock, AppInput}
}
</script>

<style scoped>

</style>
