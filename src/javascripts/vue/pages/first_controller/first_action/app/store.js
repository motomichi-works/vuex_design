import Vue from 'vue';
import Vuex from 'vuex';

import firstSection from '@/javascripts/vue/pages/first_controller/first_action/app/first_section/store.js';

Vue.use(Vuex);

const state = () => {

};

const getters = {
  appHoge () {
    return 'appHoge';
  },
};

const mutations = {

};

const actions = {

};

export default {
  // strictとnamespacedをそれぞれtrueにしておきます。
  strict: true,
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    firstSection,
  },
};
