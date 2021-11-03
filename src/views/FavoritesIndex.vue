<template>
  <div class="favorites-index">
    <h1>Your Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>Name: {{ favorite.api_dog.name }}</h2>
      <h4>Age: {{ favorite.api_dog.age }}</h4>
      <h4>Primary Breed: {{ favorite.api_dog.breeds.primary }}</h4>
      <h4 v-if="favorite.api_dog.breeds.secondary !== null">
        Secondary Breed: {{ favorite.api_dog.breeds.secondary }}
      </h4>
      <h4>Location: {{ favorite.api_dog.contact.address.city }}, {{ favorite.api_dog.contact.address.state }}</h4>
      <router-link :to="`/api_dogs/${favorite.api_dog.id}`">
        <img :src="favorite.api_dog.primary_photo_cropped.small" />
      </router-link>
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
