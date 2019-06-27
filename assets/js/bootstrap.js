import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['video-js'];

window.Vue = Vue;
Vue.use(VueRouter);
