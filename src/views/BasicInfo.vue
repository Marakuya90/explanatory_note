<template>
  <form action="#" name="BasicInfo" class="w-75" @sumbit.prevent>
    <schema-link></schema-link>
    <access-restriction></access-restriction>
    <explanatory-note-number></explanatory-note-number>
    <explanatory-note-year></explanatory-note-year>
    <explanatory-note-modifications></explanatory-note-modifications>

  </form>
  <button @click=getNote>Submit</button>

</template>

<script>
import AppHeader from "@/components/AppViews/AppHeader.vue";
import SchemaVersion from "@/components/SchemaVersion.vue";
import SchemaLink from "@/components/SchemaLink.vue";
import TGUID from "@/components/tGUID.vue";
import AccessRestriction from "@/components/AccessRestriction.vue";
import ExplanatoryNoteNumber from "@/components/ExplanatoryNoteNumber.vue";
import ExplanatoryNoteYear from "@/components/ExplanatoryNoteYear.vue";
import ExplanatoryNoteModifications from "@/components/ExplanatoryNoteModifications.vue";
import axios from "axios";
import UserService from "@/services/UserService.js";

export default {
  name: "BasicInfo",
  data() {
    return {}

  },
  components: {
    ExplanatoryNoteModifications,
    ExplanatoryNoteYear,
    ExplanatoryNoteNumber, AccessRestriction, TGUID, SchemaLink, SchemaVersion, AppHeader
  },
  methods: {
    getNote() {
      console.log('submit')
      axios.get('http://localhost:8888/explanatory-notes', {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${UserService.getToken()}`
        }
      }).then((res) => console.log(res));
    }
  }
}
</script>

<style>

.width-control {
  width: 46.875rem;
  margin: 0 auto;
}

input {
  width: 12.5rem;
  height: 1.875rem;
}

p {
  //width: 33.75rem;
}
</style>