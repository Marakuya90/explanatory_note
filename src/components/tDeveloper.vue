<template>
  <select v-model="typeOrganization" class="form-select mb-2" >
    <option disabled>Выберите вид организации</option>
    <option value="Organization" selected>Юридическое лицо</option>
    <option value="ForeignOrganization">Иностранное юридическое лицо
      (представительство, филиал)</option>
    <option value="IP">Индивидуальный предприниматель</option>
    <option value="tPerson">Физическое лицо</option>
  </select>
  <t-organization
      v-if="typeOrganization === 'Organization'"
      @organization="addResult($event, developer)"
  ></t-organization>
  <t-foreign-organization v-else-if="typeOrganization === 'ForeignOrganization'"></t-foreign-organization>
  <t-i-p v-else-if="typeOrganization === 'IP'"></t-i-p>
  <t-person v-else-if="typeOrganization === 'tPerson'"></t-person>
  <div v-if="developer.length > 0">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Номер</th>
        <th scope="col">Вид организации</th>
        <th scope="col">Описание изменения</th>
      </tr>
      </thead>
      <tbody v-for="org in developer" :key="org.number">
      <tr>
        <th scope="row">{{ mod.number}}</th>
        <td>{{ mod.date }}</td>
        <td>{{ mod.text}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TOrganization from "@/components/tOrganization.vue";
import TForeignOrganization from "@/components/tForeignOrganization.vue";
import TIP from "@/components/tIP.vue";
import TPerson from "@/components/tPerson.vue";

export default {
  name: "tDeveloper",
  components: {TPerson, TIP, TForeignOrganization, TOrganization},
  data() {
    return {
      typeOrganization: '',
      developer: new Array()
    }
  }
}
</script>

<style scoped>

</style>
