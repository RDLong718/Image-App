//This is where the Vuex is iniitially set up
import Vuex from "vuex";
//Vuex is a state management pattern + library for Vue.js applications.
import Vue from "vue";
import auth from "./modules/auth";
import images from "./modules/images";

//This is code that allows Vuex to talk to Vue.
Vue.use(Vuex);

//This is a Vuex store where we pass in modules that we need for our project. Store is an overall collection of modules and states and getters and methods contained inside of them
export default new Vuex.Store({
  modules: {
    auth,
    images,
  },
});
