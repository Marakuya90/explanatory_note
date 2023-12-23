<template>
<app-input
  text="Полное наименование иностранного юридического лица (филиала, представительства)"
  type="text"
  name="OrgFullName"
></app-input>
  <app-input
      text="Индивидуальный номер налогоплательщика – иностранного юридического лица (филиала, представительства)"
      type="number"
      name="OrgINN"
  ></app-input>
  <app-input
      text="Код причины постановки на учет иностранного юридического лица (филиала, представительства)"
      type="number"
      name="OrgKPP"
  ></app-input>
  <t-address></t-address>
  <t-email
      text-email="Адрес электронной почты иностранного юридического лица (филиала, представительства)">
  </t-email>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TAddress from "@/components/tAddress.vue";
import TEmail from "@/components/tEmail.vue";


export default {
  name: "tForeignOrganization",
  components: {TAddress, AppInput, TEmail}
}
</script>

<style scoped>

</style>
