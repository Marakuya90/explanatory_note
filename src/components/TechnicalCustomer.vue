<template>
  <div class="d-flex">
    <h4>{{ text }}</h4>
    <app-tooltips
        text-tooltips="Только юридическое лицо или иностранное юридическое лицо.
Может быть несколько элементов."
    ></app-tooltips>
  </div>
  <div name="TechnicalCustomer">
    <select v-model="typeOrganization" class="form-select mb-2" >
      <option disabled>Выберите вид организации</option>
      <option value="Organization" selected>Юридическое лицо</option>
      <option value="ForeignOrganization">Иностранное юридическое лицо
        (представительство, филиал)</option>
    </select>
    <t-s-r-o-membership></t-s-r-o-membership>
  </div>
  <t-organization v-if="typeOrganization === 'Organization'"></t-organization>
  <t-foreign-organization v-else-if="typeOrganization === 'ForeignOrganization'"></t-foreign-organization>
  <button class="btn btn-success">Добавить</button>
</template>

<script>
import TOrganization from "@/components/tOrganization.vue";
import TForeignOrganization from "@/components/tForeignOrganization.vue";
import TSROMembership from "@/components/tSROMembership.vue";
import AppTooltips from "@/components/AppTooltips.vue";


export default {
  name: "TechnicalCustomer",
  components: {TSROMembership, TForeignOrganization, TOrganization, AppTooltips},
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      typeOrganization: '',
      TechnicalCustomer: []
    }
  }
}
</script>

<style scoped>

</style>
