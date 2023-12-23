import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'
import store from '@/store'

import UserService from "@/services/UserService.js";
import HttpService from "@/services/HttpService.js";

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
// import '@/assets/styles/main.css'

function instantiateVueApp () {
    createApp(App)
        .use(store)
        .use(router)
        .use(bootstrap)
        .mount('#app')
}

UserService.initKeycloak(instantiateVueApp)
HttpService.configure()


// const tooltipTriggerList = document.querySelectorAll('.bi-info-circle')
// tooltipTriggerList.forEach(t => {
//     new bootstrap.Tooltip(t)
// })
