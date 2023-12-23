<template>
  <select v-model="typeOrganization" class="form-select mb-2" name="tAuthor">
    <option disabled>Выберите вид организации</option>
    <option value="Organization">Юридическое лицо</option>
    <option value="ForeignOrganization">Иностранное юридическое лицо
      (представительство, филиал)</option>
    <option value="IP">Индивидуальный предприниматель</option>
  </select>
  <t-organization v-if="typeOrganization === 'Organization'"
  @organization="safeObject(container.author)"></t-organization>
  <t-foreign-organization v-else-if="typeOrganization === 'ForeignOrganization'"></t-foreign-organization>
  <t-i-p v-else-if="typeOrganization === 'IP'"></t-i-p>
  <hr/>
  <t-s-r-o-membership
  @sro-safe="safeObject(this.container.author,$event)"
  ></t-s-r-o-membership>
</template>

<script>
import TOrganization from "@/components/tOrganization.vue";
import TForeignOrganization from "@/components/tForeignOrganization.vue";
import TIP from "@/components/tIP.vue";
import TSROMembership from "@/components/tSROMembership.vue";

export default {
  data() {
    return {
      typeOrganization: "",
      container: {author: []}
    }
  },
  name: "tAuthor",
  components: {TSROMembership, TIP, TForeignOrganization, TOrganization},
  methods: {
    safeObject(arr,data) {
      console.log(data)
      arr.push(data)
      console.log(arr)
    }
  }
}
</script>

<style scoped>

</style>
