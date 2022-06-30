<template>
  <div class="dropper">
    <!--We want to run uploadImages when there is a change
    $ means that we want to take the event object that comes from triggering
    this change event and take the target.files (files list) before it gets 
    placed into the actual action -->
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*"
    />
    <span>Drag Files Here!</span>
  </div>
</template>

<script>
  /*We want to map all the actions and use the uploadImages function*/
  import { mapActions } from "vuex";
  export default {
    name: "UploadForm",
    methods: mapActions(["uploadImages"]),
  };
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .dropper:hover {
    background-color: lightgray;
  }
  /*This ensures that the input area takes up the entire width of the div*/
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
  }
</style>
