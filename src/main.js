
require('./bootstrap');

import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';



// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);


import httpPlugin from "./https"

Vue.use(httpPlugin)


import Snotify from 'vue-snotify';

Vue.use(Snotify)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
