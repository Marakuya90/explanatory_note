<template>
  <div class="input-group mb-3">

    <button class="btn btn-outline-secondary" type="button" @click="alignChange( alignVariables, align )">
      <i class="bi bi-align-start" v-if = "align === 'left'"></i>
      <i class="bi bi-align-center" v-else-if = "align === 'center'"></i>
      <i class="bi bi-align-end" v-else-if = "align === 'right'"></i>
    </button>

    <th
        v-if="type === 'TitleRow'"
        :style="{ textAlign:align }"
        name="align">
      <input
          class="borderNone "
          type="text"
          name="tCell"
          size="10"
          maxlength="30"
          v-model="cellValue">
    </th>

    <td
        v-else
        :style="{ textAlign:align }">
      <input
      type="text"
      class="borderNone form-control"
      placeholder="Введите содержимое ячейки"
      name="tCell"
      v-model="cellValue">
    </td>
  </div>
</template>

<script>

export default {
  name: "tCell",
  data() {
    return {
      align: "left",
      alignVariables: ['left', 'center', 'right'],
      cellValue: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'Row'
    }
  },
  methods: {
    alignChange(arr, value) {
      let i = arr.indexOf(value)
      i++;
      if (i === arr.length) {
        i = 0
      }
      console.log(i)
      this.align = arr[i];

    },
    setCellValue(e) {
      this.cellValue = e.target.value
      e.target.value = ''
    }
  }
}
</script>

<!--<style scoped>-->
<!--.borderNone {-->
<!--  border: none;-->
<!--}-->
<!--</style>-->
