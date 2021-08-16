
require('./bootstrap');

import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';



// router setup
import router from './routes/router';
Vue.use(DashboardPlugin);


import httpPlugin from "./https"
Vue.use(httpPlugin)




import Snotify, {
  SnotifyPosition
} from 'vue-snotify'
const options = {
  toast: {
    position: SnotifyPosition.leftTop
  }
}
Vue.use(Snotify, options)


import * as VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
