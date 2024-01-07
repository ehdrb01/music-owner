import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import BootstrapVue from 'bootstrap-vue';

import '@/plugins/lodash';
import '@/plugins/toasted';
import i18n from '@/plugins/i18n';
/** chart */

import { Bubble, Bar } from 'vue-chartjs';


/** toasted, modal */
import VueUniversalModal from 'vue-universal-modal';

/** @moment */
import moment from 'moment';
window.moment = moment;
/** @emitter */
import eventBus from '@/core/eventBus';
window.emitter = eventBus;

/** @request */
import request from '@/core/request';
window.$api = request;

const app = createApp(App);
app.use(router);
app.use(BootstrapVue);
app.use(Bubble, Bar);
app.use(moment);
app.use(VueUniversalModal, { teleportTarget: '#modals' });
app.use(i18n);
app.use(store);
app.mount('#app');











