<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <!--v-for--loops throw the images being fetched. The URL to the image is
      the "link" property-->
      <img v-for="image in allImages" :src="image.link" :key="image" />
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
  /* This allows us to map all the actions and getters in vuex so we can call on the 
fetch image function*/
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "ImageList",
    computed: mapGetters(["allImages", "isLoggedIn"]),
    //called from the fetchImages function in the images api file
    methods: mapActions(["fetchImages"]),
    //Show on the screen
    created() {
      this.fetchImages();
    },
  };
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }
  img {
    max-width: 100%;
    padding: 5px;
  }
</style>
