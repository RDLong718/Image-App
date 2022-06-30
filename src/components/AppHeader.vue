<template>
  <!--Taken from the Semantics UI. href "/" means it would go back to the main page when clicked -->
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <!--v-if means if the user "isLoggedIn" then display the galleries
    upload and logout button-->
      <div v-if="isLoggedIn" class="horizontal">
        <!--This is in exchange for an anchor tag because anchor tags refresh the page
      and we do not want that-->
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>

      <!--# means go nowhere. on click perform login function.
      you can place v-else immediately after an v-if statement.. 
      think of it as a if..else statement. -->
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
  //Used to wire-up all actions to component
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "AppHeader",
    /*Computed is how we read our data and get access
    to it inside our template. We want to use the 
    mapGetters to access the isLoggedIn from our getters in the auth
    module */
    computed: mapGetters(["isLoggedIn"]),
    //this is will give us the login action from the auth module
    methods: mapActions(["login", "logout"]),
  };
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>
