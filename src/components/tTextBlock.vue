<template>
  <h4>{{ title }}</h4>
  <app-input
    text = "Заголовок текстового блока"
    type = text
    name="Title"></app-input>
  <app-input
      text = "Подзаголовок"
      type = text
      name="SubTitle"></app-input>
  <app-input
      text = "Текст"
      type = text
      name="Text"></app-input>
  <button class="btn btn-success" @click.prevent="isImage = !isImage">{{ isImage?'X':'Добавить изображение'}}</button>
  <t-image v-if="isImage"></t-image>
  <button class="btn btn-success" @click.prevent="isTable = !isTable">{{ isTable?'X':'Добавить таблицу'}}</button>
  <t-table v-if="isTable"></t-table>

</template>

<script>
import AppInput from "@/components/AppInput.vue";
import TImage from "@/components/tImage.vue";
import TTable from "@/components/tTable.vue";

export default {
  name: "tTextBlock",
  components: {TTable, TImage, AppInput},
  data() {
    return {
      isImage: false,
      isTable: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
