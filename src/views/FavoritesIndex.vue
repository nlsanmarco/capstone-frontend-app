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
      <br />
      <router-link to="/api_dogs" class="btn btn-outline-secondary">back to matches</router-link>
      <br />
      <button v-on:click="removeFavorite(favorite)">remove from favorites</button>
      {{ favorite.id }}
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [
        {
          api_dog: {
            name: "",
            age: "",
            attributes: {
              house_trained: "",
              shots_current: "",
              spayed_neutered: "",
              special_needs: "",
            },
            id: "",
            breeds: {
              primary: "",
              secondary: "",
            },
            contact: {
              address: {
                address1: "",
                address2: "",
                city: "",
                state: "",
                postcode: "",
              },
              email: "",
              phone: "",
            },
            description: "",
            distance: "",
            environment: {
              cats: "",
              dogs: "",
              children: "",
            },
            gender: "",
            organization_id: "",
            photos: [
              {
                full: "",
                large: "",
                medium: "",
                small: "",
              },
            ],
            primary_photo_cropped: {
              full: "",
              large: "",
              medium: "",
              small: "",
            },
            size: "",
            url: "",
          },
        },
      ],
    };
  },
  created: function () {
    axios.get("/favorites").then((response) => {
      console.log(response.data);
      this.favorites = response.data;
    });
  },
  methods: {
    removeFavorite: function (favorite) {
      if (confirm("Are you sure you want to remove this dog from your favorites?")) {
        axios
          .delete(`/favorites/${favorite.id}`)
          .then((response) => {
            console.log(response.data);
            var index = this.favorites.indexOf(favorite);
            this.favorites.splice(index, 1);
          })
          .catch((error) => {
            this.status = error.response.status;
            this.errors = error.response.data.errors;
          });
      }
    },
  },
};
</script>
