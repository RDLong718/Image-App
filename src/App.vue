<template>
  <div>
    <AppHeader></AppHeader>
    <!--We want to show whatever other content we are supposed
    to be displaying, given the current URL-->

    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
    },
  };
</script>

<style scoped></style>
