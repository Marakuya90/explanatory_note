import HttpService from "@/services/HttpService.js";

export default {
    namespaced: true,
    state() {
        return {
            explanatory_note: [],
            explanatoryNoteYear: new Date().getFullYear(),
            schemaVersion: '01.03'
        }
    },
    watch:{
        explanatoryNoteYear(newYear) {
            localStorage.explanatoryNoteYear = newYear;
        }
    },
    getters: {
        EXPLANATORY_NOTE(state){
            return state.explanatory_note
        },
        EXPLANATORY_NOTE_YEAR(state){
            return state.explanatoryNoteYear
        },
        SCHEMA_VERSION(state){
            return state.schemaVersion
        }
    },
    mutations: {
        SAVE_EXPLANATORY_NOTE (state, payload) {
           state.explanatory_note.push(payload);
        },
        SET_EXPLANATORY_NOTE_YEAR (state, payload) {
            state.explanatoryNoteYear = payload;
            localStorage.setItem('explanatoryNoteYear', payload);
            }
    },
    actions: {
        // async SAVE_EXPLANATORY_NOTE (context, payload) {
        //     const host = process.env.VUE_APP_HOST_EXPLANATORY_NOTE
        //     const headers = new Headers()
        //     headers.append('Content-Type', 'application/json; charset=UTF-8')
        //     let data = await axios(host, {
        //         method: 'post',
        //         headers: headers,
        //         body: JSON.stringify({
        //             explanatoryNoteYear: this.state.explanatoryNoteYear,
        //             schemaVersion: this.state.schemaVersion
        //         })
        //     })
        //
        //         if(data.status === 201) {
        //             context.commit('SAVE_EXPLANATORY_NOTE', payload);
        //         } else {
        //             console.log(data)
        //         }
        // }
    }
}
