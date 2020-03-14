import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/javascripts/vue_applications/pages/first_page/store';

import App from '@/javascripts/vue_applications/pages/first_page/App';
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
