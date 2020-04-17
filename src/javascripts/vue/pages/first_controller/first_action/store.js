import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import app from '@/javascripts/vue/pages/first_controller/first_action/app/store.js';

Vue.use(Vuex);

const state = () => {

};

const getters = {

};

const mutations = {

};

const actions = {

};

const plugins = [

];

const isDevelopment = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    app,
  },
  plugins: isDevelopment ? [...plugins, createLogger()] : plugins,
});
