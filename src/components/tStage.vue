<template>
  <form name="Stage">
    <h4>Описание этапа строительства, реконструкции, капитального ремонта, сноса</h4>
    <app-input name="Number"
               text="Номер или наименование этапа"></app-input>
    <app-input name="BeginDate"
               text="Дата начала этапа"
               type="date"></app-input>
    <app-input name="EndDate"
               type="date"
               text="Дата окончания этапа"></app-input>
    <app-input name="OperationDate"
               text="Дата ввода в эксплуатацию (при наличии)"
               type="date"></app-input>
    <label for="Note">Дополнительные сведения об этапе</label>
    <textarea name="Note" id="Note"></textarea>

  </form>
</template>

<script>
import AppInput from "@/components/AppInput.vue";

export default {
  name: "tStage",
  components: {AppInput}
}
</script>

<style scoped>

</style>
