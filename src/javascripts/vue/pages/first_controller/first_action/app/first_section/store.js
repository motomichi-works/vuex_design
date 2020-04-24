import Vue from 'vue';
import Vuex from 'vuex';

// stores
import fieldUnit from '@/javascripts/vue/common/field_unit/text_0001/store.js';

Vue.use(Vuex);

const state = () => {

};

const getters = {

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
    emailFieldUnit: fieldUnit,
    phoneNumberFieldUnit: fieldUnit,
  },
};
