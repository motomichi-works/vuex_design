import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/javascripts/vue/pages/first_controller/first_action/store';

import App from '@/javascripts/vue/pages/first_controller/first_action/app/index';
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
