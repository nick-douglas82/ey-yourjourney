import 'babel-polyfill';
import './bootstrap';
import store from './store';

import App from './views/App.vue';

new Vue({
    el: 'app',
    components: { App },
    store
});
