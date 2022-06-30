import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

//state of token initially set to null
//see Auth Module Deisgn in notes
//local storage is a native browser feature that allows us to store
//variables and we can use it to store the access token so they can come back to the
// app in the future
const state = {
  //we use loalStorage to get store token. If its still available the user is
  // still logged in
  token: window.localStorage.getItem("imgur_token"),
};

//is a function that takes the entire state object and computates and returns a function
const getters = {
  //easy way to turn a value to a boolean
  //so if the state of the token is not null return true
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  //calls the login function on the imgur.js file
  login: () => {
    api.login();
  },
  /*When we call in this function we pass in window.location.hash.
  The first object that gets passed to any action is an object that
   has a bunch of helper methods hence "commit"*/
  finalizeLogin({ commit }, hash) {
    /*This takes the properties and values of the string..
    Exclude the # and replace it with an empty string
    this is why we import qs */
    const query = qs.parse(hash.replace("#", ""));

    /**We do this to set the token to the acquired token from the hash
     * URL
     */
    commit("setToken", query.access_token);
    /**Saves the token to local storage so you dont logout everytime you leave */
    window.localStorage.setItem("imgur_token", query.access_token);
    //okay its time ot navigate the user around the page.. We are logged in!!
    // route the user back to the main page
    router.push("/");
  },
  // to call a mutation we use the commit function
  logout: ({ commit }) => {
    //call the setToken mutation and set it to null
    commit("setToken", null);
    //Makes sure the user stays logged out by emptying the localstorage
    window.localStorage.removeItem("imgur_token");
  },
};

const mutations = {
  //function is called with an initial first argument of state
  // (changes) and a second argumment of token then returns the
  //new state of the token
  setToken: (state, token) => {
    state.token = token;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
