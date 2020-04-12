import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/javascripts/vue/pages/first_controller/first_action/store.js';

import App from '@/javascripts/vue/pages/first_controller/first_action/app/index';
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  el: '#vue-root',
  store,
  components: {
    App,
  },
  // template: '<App />',
});
