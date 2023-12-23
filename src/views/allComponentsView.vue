<template>

  <form class="container d-flex flex-column mt-5 gap-2 mb-5">
    <button class="btn btn-success" @click='update'>Update</button>
    <schema-version></schema-version>
    <schema-link
    ></schema-link>
    <t-g-u-i-d></t-g-u-i-d>
    <access-restriction></access-restriction>
    <explanatory-note-number></explanatory-note-number>
    <explanatory-note-year></explanatory-note-year>
    <explanatory-note-modifications></explanatory-note-modifications>
    <issue-author></issue-author>
    <t-project-documentation-authors></t-project-documentation-authors>
    <t-signers></t-signers>
    <deve-loper></deve-loper>
    <technical-customer text="Сведения о техническом заказчике"></technical-customer>
    <used-abbreviations></used-abbreviations>
    <t-used-norms></t-used-norms>
    <project-decision-documents></project-decision-documents>
    <project-initial-documents></project-initial-documents>
    <t-engineering-survey-documents></t-engineering-survey-documents>
    <t-additional-data></t-additional-data>
    <t-finance-sources></t-finance-sources>
    <t-non-industrial-object></t-non-industrial-object>
    <t-industrial-object></t-industrial-object>
    <t-linear-object></t-linear-object>
    <div name="DesignerNote">
      <t-text-block title="Дополнительное произвольное текстовое
описание, подготовленное разработчиком проектной документации"></t-text-block>
    </div>
    <t-designer-assurance></t-designer-assurance>
  </form>
</template>
<script>
import TProjectDocumentationAuthors from "@/components/tProjectDocumentationAuthors.vue";
import TSigners from "@/components/tSigners.vue";
import IssueAuthor from "@/components/IssueAuthor.vue";
import SchemaVersion from "@/components/SchemaVersion.vue";
import SchemaLink from "@/components/SchemaLink.vue";
import TGUID from "@/components/tGUID.vue";
import AccessRestriction from "@/components/AccessRestriction.vue";
import ExplanatoryNoteNumber from "@/components/ExplanatoryNoteNumber.vue";
import ExplanatoryNoteYear from "@/components/ExplanatoryNoteYear.vue";
import ExplanatoryNoteModifications from "@/components/ExplanatoryNoteModifications.vue";
import {mapGetters, mapMutations, mapActions} from 'vuex'
import DeveLoper from "@/components/Developer.vue";
import TechnicalCustomer from "@/components/TechnicalCustomer.vue";
import UsedAbbreviations from "@/components/UsedAbbreviations.vue";
import TUsedNorms from "@/components/tUsedNorms.vue";
import ProjectDecisionDocuments from "@/components/ProjectDecisionDocuments.vue";
import ProjectInitialDocuments from "@/components/ProjectInitialDocuments.vue";
import TEngineeringSurveyDocuments from "@/components/tEngineeringSurveyDocuments.vue";
import TAdditionalData from "@/components/tAdditionalData.vue";
import TFinanceSources from "@/components/tFinanceSources.vue";
import TNonIndustrialObject from "@/components/tNonIndustrialObject.vue";
import TIndustrialObject from "@/components/tIndustrialObject.vue";
import TLinearObject from "@/components/tLinearObject.vue";
import TTextBlock from "@/components/tTextBlock.vue";
import TDesignerAssurance from "@/components/tDesignerAssurance.vue";

export default {
  components: {
    TDesignerAssurance,
    TTextBlock,
    TLinearObject,
    TIndustrialObject,
    TNonIndustrialObject,
    TFinanceSources,
    TAdditionalData,
    TEngineeringSurveyDocuments,
    ProjectInitialDocuments,
    ProjectDecisionDocuments,
    TUsedNorms,
    UsedAbbreviations,
    TechnicalCustomer,
    DeveLoper,
    ExplanatoryNoteModifications,
    ExplanatoryNoteYear,
    ExplanatoryNoteNumber,
    AccessRestriction, TGUID, SchemaLink, SchemaVersion, IssueAuthor, TSigners, TProjectDocumentationAuthors
  },
  computed: {
    getSchema_ver() {
      return {
        ...mapGetters('EXPLNN', ['EXPLANATORY_NOTE', 'SCHEMA_VERSION'])
      }
    },
  },
  methods: {
    ...mapMutations('EXPLNN', ['SAVE_EXPLANATORY_NOTE']),
    ...mapActions({update: 'EXPLNN/SAVE_EXPLANATORY_NOTE'}),
  },

}
</script>
<style>

</style>
