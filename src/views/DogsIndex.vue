<template>
  <div class="dogs-index">
    <h1>Your Matches</h1>
    <div v-for="api_dog in api_dogs" v-bind:key="api_dog.id">
      <h2>Name: {{ api_dog.name }}</h2>
      <h4>Age: {{ api_dog.age }}</h4>
      <h4>Primary Breed: {{ api_dog.primary_breed }}</h4>
      <h4>Location: {{ api_dog.location }}</h4>
      <p>images: {{ api_dog.primary_photo_cropped }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      api_dogs: [],
    };
  },
  created: function () {
    axios.get("/api_dogs").then((response) => {
      console.log(response.data);
      this.api_dogs = response.data;
    });
  },
  methods: {},
};
</script>
