<template>
  <form class="card p-3 d-flex gap-2 pb-2 bg-body-secondary" name="IssueAuthor">
    <div class="d-flex">
    <h4>Сведения о лице, подготовившем пояснительную записку - генеральном проектировщике</h4>
    <app-tooltips
        text-tooltips="Возможно: юридическое лицо, иностранное юридическое лицо, индивидуальный предприниматель"
    ></app-tooltips>
    </div>
    <t-author></t-author>
  </form>
</template>

<script>
import tAuthor from "@/components/tAuthor.vue";
import AppTooltips from "@/components/AppTooltips.vue";
export default {
  name: "IssueAuthor",
  components:{tAuthor, AppTooltips}
}
</script>

<style scoped>

</style>
