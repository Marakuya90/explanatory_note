<template>
<!--  <div class="d-flex justify-content-between">-->
<!--    <div class="d-flex">-->
<!--      <p>Год составления пояснительной записки</p>-->
<!--      <app-tooltips-->
<!--          text-tooltips="Целое число больше 2021"-->
<!--      ></app-tooltips>-->
<!--    </div>-->
<!--    <input-->
<!--        type="number"-->
<!--        name="ExplanatoryNoteYear"-->
<!--        min="2021"-->
<!--        :value="EXPLANATORY_NOTE_YEAR"-->
<!--        @input="updateValue">-->
<!--  </div>-->
  <div class="mb-3">
    <label for="ExplanatoryNoteYear" class="form-label">Год составления пояснительной записки</label>
    <input
        type="text"
        class="form-control"
        id="ExplanatoryNoteYear"
        aria-describedby="emailHelp"
        name="ExplanatoryNoteYear"
        min="2021"
        :value="EXPLANATORY_NOTE_YEAR"
        @input="updateValue">
    <div id="ExplanatoryNoteNumberHelp" class="form-text">Целое число больше 2021</div>
  </div>
</template>

<script>
import AppTooltips from "@/components/AppTooltips.vue";
import {mapGetters} from "vuex";
export default {
  name: "ExplanatoryNoteYear",
  components: { AppTooltips },
  computed: {
    ...mapGetters ('EXPLNN',['EXPLANATORY_NOTE_YEAR'])
  },
    methods: {
      updateValue (e) {
        this.$store.commit('EXPLNN/SET_EXPLANATORY_NOTE_YEAR', e.target.value)
      }
    }
}
</script>

<style scoped>

</style>
