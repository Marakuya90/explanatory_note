// import Keycloak from 'keycloak-js';

import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default {
    namespaced: true,
    state() {
        return {
            codeVerifier: null,
            initOptions: {
                realm: 'your_realm',
                clientId: 'your_client_id',
                // url: process.env.VUE_APP_HOST_KEYCLOAK,
                resource: 'your_resource', //this is optional, depending on your keycloak config
                'public-client': true,
                'verify-token-audience': false
            },
            length: 10
        }
    },

    methods: {

        generateRandomString(length) {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },

        async generateCodeChallenge(codeVerifier) {
            let digest = await crypto.subtle.digest("SHA-256",
                new TextEncoder().encode(codeVerifier));

            return btoa(String.fromCharCode(...new Uint8Array(digest)))
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
        },

        //     async authenticateAgainstKeycloak () {
        //
        //         // const keycloak = Keycloak(this.initOptions)
        //
        //         await keycloak.init({ onLoad: 'login-required' }).then((auth) => {
        //             if (!auth) {
        //                 window.location.reload()
        //             } else {
        //                 console.log('Authenticated')
        //             }
        //             if (keycloak.token) {
        //                 window.localStorage.setItem('keycloakToken', keycloak.token)
        //             }
        //         })
        //         await router.push('/')
        //     }
        // },

        watch: {
            codeVerifier(newCode, oldCode) {
                if (newCode !== oldCode) {
                    window.sessionStorage.setItem("code_verifier", this.codeVerifier);
                }
            }
        },
        getters,
        mutations,
        actions
    }
}
