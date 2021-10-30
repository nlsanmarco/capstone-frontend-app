<template>
  <div class="favorites-index">
    <h1>Your Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>Name: {{ favorite.name }}</h2>
      <h4>Age: {{ favorite.age }}</h4>
      <h4>Primary Breed: {{ favorite.primary_breed }}</h4>
      <h4>Location: {{ favorite.location }}</h4>
      <p>images: {{ favorite.primary_photo_cropped }}</p>
      <router-link :to="`/favorites/${favorite.id}`" class="btn btn-outline-secondary">See Details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
    };
  },
  created: function () {
    axios.get("/favorites").then((response) => {
      console.log(response.data);
      this.favorites = response.data;
    });
  },
  methods: {},
};
</script>
