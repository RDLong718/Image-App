import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store";
import AuthHandler from "./components/AuthHandler.vue";
import ImageList from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

//Tells the Vue library about the existance of the Vue Router..handshake
Vue.use(VueRouter);
//it will pass in an object and its going to have
//a prop called routes. its going to be an array containing
// a collection of different objects and each of these objects is
//going to tell the router about the possible routes that
//can be visited.
// exported so we can import from anywhere
export const router = new VueRouter({
  /*This puts the router in Browser route mode. See notes 
  'hash vs browser router' */
  mode: "history",
  routes: [
    /**Anytime  our user goes to the root route we want to show
     * the image list
     */
    { path: "/", component: ImageList },
    /**Anytime our user goes to the upload route we want the page to show
     * the upload form
     */
    { path: "/upload", component: UploadForm },
    /*Everytime our user ends up on this routher we try to 
    show this AuthHandler component */
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});

new Vue({
  //passes instance of router from line 13
  router,
  //provides store to our instance (data)
  store,
  render: (h) => h(App),
}).$mount("#app");
