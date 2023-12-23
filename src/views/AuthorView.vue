<template>
  <select v-model="typeOrganization" class="form-select">
    <option disabled>Выберите вид организации</option>
    <option value="Organization">Юридическое лицо</option>
    <option value="ForeignOrganization">Иностранное юридическое лицо
      (представительство, филиал)</option>
    <option value="IP">Индивидуальный предприниматель</option>
  </select>
  <t-organization v-if="typeOrganization === 'Organization'"></t-organization>
  <t-foreign-organization v-else-if="typeOrganization === 'ForeignOrganization'"></t-foreign-organization>
  <t-i-p v-else-if="typeOrganization === 'IP'"></t-i-p>
  <t-s-r-o-membership></t-s-r-o-membership>
</template>

<script>
import TOrganization from "@/components/tOrganization.vue";
import TForeignOrganization from "@/components/tForeignOrganization.vue";
import TIP from "@/components/tIP.vue";
import TSROMembership from "@/components/tSROMembership.vue";

export default {
  data() {
    return {
      typeOrganization: ""
    }
  },
  name: "testAuthor",
  components: {TSROMembership, TIP, TForeignOrganization, TOrganization}
}
</script>

<style scoped>

</style>
