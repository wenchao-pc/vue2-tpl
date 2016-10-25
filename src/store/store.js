/**
 * Created by kuo zi on 2016/10/19.
 */
import Vue from "vue";
import Vuex from "vuex";
import nav from "./modules/nav";
import webIm from "./modules/webIm";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    route: {
      name: null,
      params: null
    }
  },
  modules: {
    nav,
    webIm
  }
});

export default store;
