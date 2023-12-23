<template>
  <form name="FullDocIssueAuthor">
    <h4>Сведения об исполнителе отчета о результатах инженерных изысканий (юридическое лицо или индивидуальный
      предприниматель)</h4>
    <component
        v-for="item in authors"
        :key="item"
        :is="'tAuthor'"
    ></component>
    <button class="btn btn-light" @click.prevent=newComponent(this.authors)>Добавить исполнителя</button>
  </form>
</template>
<script>
import tAuthor from "@/components/tAuthor.vue";

export default {
  name: "FullDocIssueAuthor",
  components: { tAuthor },
  data() {
    return {
      authors: [],
    }
  },
  methods: {
    newComponent(arr) {
      arr.push(arr.length)
      console.log(arr)
    }
  }
}
</script>

<style scoped>

</style>
