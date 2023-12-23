<template>
  <form name="FinanceSources">
    <h4 class="bg-info">Сведения об источниках финансирования строительства (реконструкции, капитального ремонта, сноса) объекта капитального строительства</h4>
  <div class="btn-group">
    <button
        v-for="tab in tabs"
        :key="tab.name"
        @click.prevent="currentTab = tab.name"
        class="btn btn-light">
      {{ tab.rusName }}
    </button>
  </div>
    <component
        :is="currentTab"
    ></component>
  </form>
</template>

<script>


import TBudgetSource from "@/components/tBudgetSource.vue";
import TStateCustomerSource from "@/components/tStateCustomerSource.vue";
import TPrivateSource from "@/components/tPrivateSource.vue";

export default {
  name: "tFinanceSources",
  components: {
    TPrivateSource,
    TStateCustomerSource,
    TBudgetSource
  },
  data() {
    return {
      tabs: [
          {
            name:'TBudgetSource',
            rusName:'Бюджетные средства'
          },
          {
            name:'TStateCustomerSource',
            rusName:'Средства юридических лиц'
          },
          {
            name:'TPrivateSource',
            rusName:'Другие источники'
          }
      ],
      currentTab:'TBudgetSource'
    }
  }
}
</script>

<style scoped>

</style>
