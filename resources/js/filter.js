import Vue from 'vue';
import moment from "moment";

Vue.filter('timeformat', (arg) => {
    return moment(arg).format('MMMM Do YYYY, h:mm');
})

Vue.filter('sortLength',function (text,length,suffix) {
    return text.substring(20,length)+suffix;
})
