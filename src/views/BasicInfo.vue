<template>
  <form action="#" name="BasicInfo" class="w-75" @sumbit.prevent>
    <schema-link></schema-link>
    <access-restriction></access-restriction>
    <explanatory-note-number></explanatory-note-number>
    <explanatory-note-year></explanatory-note-year>
    <explanatory-note-modifications></explanatory-note-modifications>
  </form>

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
import HttpService from "@/services/HttpService.js";
import UserService from "@/services/UserService.js";

export default {
  name: "BasicInfo",
  components: {
    ExplanatoryNoteModifications,
    ExplanatoryNoteYear,
    ExplanatoryNoteNumber, AccessRestriction, TGUID, SchemaLink, SchemaVersion, AppHeader
  },
  methods: {
    // sendForm: function ()
  },
  mounted() {
    HttpService.getAxiosClient();
    console.log(UserService.getToken())

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