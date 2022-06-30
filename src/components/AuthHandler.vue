<template><div>Please Wait...</div></template>

<script>
  /*To connect an action to a component, we first import 
mapActions from vuex*/
  import { mapActions } from "vuex";
  export default {
    name: "AuthHandler",
    methods: mapActions(["finalizeLogin"]),
    /*Created is a built in life cycle method that once defined
    performs when the componenet is created*/
    created() {
      /*when we call this action we want the entire hash of the 
        url and pass it into the action and then have some parsing
        logic to pull the actual access token*/
      this.finalizeLogin(window.location.hash);
    },
  };
</script>

<style scoped></style>
