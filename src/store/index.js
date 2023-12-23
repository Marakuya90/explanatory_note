import { createStore, createLogger } from 'vuex'
import Explanatory_note from "@/store/modules/explanatory_note";
import auth from "@/store/modules/auth/auth";

export default createStore({
  plugins:[createLogger()], 
  modules: {
    EXPLNN: Explanatory_note,
    AUTH: auth
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
