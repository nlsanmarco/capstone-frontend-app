<template>
  <div class="favorites-index">
    <h1>Your Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>Name: {{ favorite.api_dog.name }}</h2>
      <h4>Age: {{ favorite.api_dog.age }}</h4>
      <h4>Primary Breed: {{ favorite.api_dog.breeds.primary }}</h4>
      <h4>Location: {{ favorite.api_dog.contact.address.city }}, {{ favorite.api_dog.contact.address.state }}</h4>
      <img :src="favorite.api_dog.primary_photo_cropped.small" />
      <!-- <p>images: {{ favorite.primary_photo_cropped.small }}</p> -->
      <!-- <router-link :to="`/api_dogs/${favorite.api_dog_id}`" class="btn btn-outline-secondary">See Details</router-link> -->
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
