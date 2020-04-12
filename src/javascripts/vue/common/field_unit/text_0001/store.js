// utilities
import setState from '@/javascripts/utilities/mutations/setState.js';
// stores
import field from '@/javascripts/vue/common/field/store.js';

const state = () => {
  return {

  };
};

const getters = {

};

const actions = {

};

const mutations = {
  setState,
};

export default {
  // strictとnamespacedをそれぞれtrueにしておきます。
  strict: true,
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    field,
  },
};
