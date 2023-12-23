<template>
  <form name="SoftwareUsed">
    <h4>Сведения о компьютерных программах, которые
      использовались при выполнении расчетов конструктивных элементов зданий, строений и сооружений</h4>
    <app-input name="SoftwareNote"
               text="Общие сведения об используемых программных продуктах">
    </app-input>
    <t-software></t-software>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TSoftware from "@/components/tSoftware.vue";

export default {
  name: "tSoftwareUsed",
  components: {TSoftware, AppInput}
}
</script>

<style scoped>

</style>
