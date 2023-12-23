<template>
  <h5 class="form-label" >
    Вид саморегулируемой организации</h5>
  <select
      class="form-select mb-2"
      :name="name"
      v-model="this.SRO"
      @change="$emit('SROtype',{name:this.name, value:this.SRO})">
    <option selected>Саморегулируемая организация в области инженерных изысканий</option>
    <option>Саморегулируемая организация в области архитектурно-строительного проектирования</option>
    <option>Саморегулируемая организация в области строительства</option>
  </select>
</template>

<script>
export default {
  name: "tSROType",
  data(){
    return {
      SRO: 'Саморегулируемая организация в области инженерных изысканий',
      name: "SROType"
    }
  },
  emits:['SROtype']
}
</script>

<style scoped>

</style>
