<template>
<form name="Modification"  @submit.prevent="addModification">
  <div class="d-flex gap-2">
    <label class="form-label">Номер изменения<input class="form-control" type="number" name="ModificationNumber" v-model="modification.number"></label>
    <label class="form-label">Дата изменения<input class="form-control" type="date" name="ModificationDate" v-model="modification.date"></label>
    <label class="form-label">Описание изменения<input class="form-control" type="text" name="ModificationNote" v-model="modification.text"></label>
  </div>
  <button class="btn btn-success">Добавить</button>
  <div v-if="modifications.length > 0">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Номер изменения</th>
        <th scope="col">Дата изменения</th>
        <th scope="col">Описание изменения</th>
      </tr>
      </thead>
      <tbody v-for="mod in modifications" :key="mod.number">
      <tr>
        <th scope="row">{{ mod.number}}</th>
        <td>{{ mod.date }}</td>
        <td>{{ mod.text}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</form>
</template>

<script>
export default {
  name: "tModification",
  methods:{
    addModification() {
      if(this.modification.number !== ''& this.modification.date !== '') {
        this.modifications.push(this.modification)
        this.modification = {number:'', date: '', text: ''}
        console.log(this.modification)
        console.log(this.modifications)
      }
      else {
        alert('Пустые поля')
      }
    }
  },
  data() {
    return {
      modification: {number:'', date: '', text: ''},
      modifications: []
    }
  }
}
</script>

<style scoped>

</style>
