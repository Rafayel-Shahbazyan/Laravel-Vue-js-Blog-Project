require('./bootstrap');

window.Vue = require('vue');

//Editor support

import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

//Support vuex

import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './Store/index';

const store = new Vuex.Store(
    storeData
)
//support moments js

import { filter } from './filter';

//Vue router

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);

//vform

import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Sweet alert

import swal from 'sweetalert2';

window.Swal = swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.toast = toast


const router = new VueRouter({
    routes,
    mode: 'hash'
})

const app = new Vue({
    el: '#app',
    router,
    store
});
