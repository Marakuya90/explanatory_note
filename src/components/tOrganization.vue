<template>
  <div class="input-group d-flex flex-column" name="Organization">
    <app-input
        text="Полное наименование юридического лица"
        type="text"
        name="OrgFullName"
    ></app-input>
    <app-input
        text="Основной государственный регистрационный номер юридического лица"
        type="number"
        name="OrgOGRN"
    ></app-input>
    <app-input
        text="Индивидуальный номер налогоплательщика - юридического лица"
        type="number"
        name="OOrgINN"
    ></app-input>
    <app-input
        text="Код причины постановки на учет юридического лица"
        type="number"
        name="OrgKPP"
    ></app-input>
    <app-input
        text="Полное наименование юридического лица"
        type="text"
        name="OrgFullName"
    ></app-input>
    <t-address
    ></t-address>
    <t-email
        text-email="Адрес электронной почты юридического лица"
    ></t-email>
  </div>
</template>

<script>
import tEmail from "@/components/tEmail.vue";
import AppInput from "@/components/AppInput.vue";
import TAddress from "@/components/tAddress.vue";
export default {
  components: {TAddress, tEmail, AppInput},
  name: "tOrganization"
}
</script>

<style scoped>

</style>
