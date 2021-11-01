<template>
  <div class="dogs-index">
    <h1>Your Matches</h1>
    <div v-for="api_dog in api_dogs" v-bind:key="api_dog.id">
      <h2>Name: {{ api_dog.name }}</h2>
      <h4>Age: {{ api_dog.age }}</h4>
      <h4>Primary Breed: {{ api_dog.breeds.primary }}</h4>
      <h4>Location: {{ api_dog.contact.address.city }}, {{ api_dog.contact.address.state }}</h4>
      <router-link :to="`/api_dogs/${api_dog.id}`"><img :src="api_dog.primary_photo_cropped.small" /></router-link>
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
