<template>
  <div class="container w-50">
    <h4>Контрольная сумма файла документа, рассчитанная по алгоритму CRC32-IEEE</h4>
    <input type="file" class="form-control" id="file" @change=handleFiles>
    <p class="m-3" id="inputTitle"><strong>Хеш сумма</strong> {{ checkSum }}</p>
  </div>
</template>

<script >
export default {
  data() {
    return {
      checkSum: ''
    }
  },
  methods: {
    handleFiles() {
      let inputFile = document.getElementById('file').files[0];
      console.log(inputFile);
      let reader = new FileReader();
      reader.readAsBinaryString(inputFile);
      // reader.onload = function (event) {
        // this.checkSum = md5(event.target.result);
        console.log(this.checkSum)
      // }
    }
  }
}


// const data = 'Hello, world!';
// const hash = crc32.str(data);
// console.log(hash);

</script>

<style scoped>

</style>
