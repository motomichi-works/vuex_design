// utilities
import setState from '@/javascripts/utilities/mutations/setState.js';

const state = () => {
  return {
    value: '',
    checked: false,
    constraintKey: '',
    isBlured: false,
    isCreatedOnce: false,
    isMountedOnce: false,
    moduleNames: [],
    realtimeErrors: [],
  };
};

const getters = {
  hoge () {
    return 'hoge';
  },
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

  },
};
