<template>
  <div class="dogs-show">
    <div>
      <h1>Pupper Profile</h1>
      <h2>name: {{ api_dog.name }}</h2>
      <h4>age: {{ api_dog.age }}</h4>
      <h4>primary breed: {{ api_dog.breeds.primary }}</h4>
      <h4 v-if="api_dog.breeds.secondary !== null">secondary breed: {{ api_dog.breeds.secondary }}</h4>
      <h4>gender: {{ api_dog.gender }}</h4>
      <h4>size: {{ api_dog.size }}</h4>
      <h4>description: {{ api_dog.description }}</h4>
      <h2>Rescue Agency:{{}}</h2>
      <h4>location: {{ api_dog.contact.address.city }},{{ api_dog.contact.address.state }}</h4>
      <h4>website:</h4>
      <h4>phone:</h4>
      <h4>email:</h4>
      <h2>Training:</h2>
      <h4>house trained:</h4>
      <div>
        <h2>Good in a house with:</h2>
        <h4 v-if="api_dog.environment.dogs === true">dogs</h4>
        <h4 v-if="api_dog.environment.cats === true">cats</h4>
        <h4 v-if="api_dog.environment.children === true">children</h4>
      </div>
      <h2>Medical:</h2>
      <h4 v-if="api_dog.attributes.shots_current === true">Vaccinations up to date</h4>
      <h4 v-if="api_dog.attributes.spayed_neutered === true">spayed/neutered</h4>
      <h4 v-if="api_dog.attributes.spayed_neutered === false">not spayed/neutered</h4>
      <h4 v-if="api_dog.attributes.special_needs === true">special needs</h4>
      <div v-for="photo in api_dog.photos" v-bind:key="photo.id">
        <img :src="api_dog.photos[0].full" />
      </div>
    </div>
    <br />
    <button v-on:click="makeFavorite()">Favorite</button>
    <br />
    <router-link to="/api_dogs" class="btn btn-outline-secondary">back to matches</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      api_dog: {},
    };
  },
  created: function () {
    axios.get(`/api_dogs/${this.$route.params.api_dog_id}`).then((response) => {
      console.log(response.data);
      this.api_dog = response.data;
    });
  },
  methods: {
    makeFavorite: function () {
      axios.post(`/favorites/${this.api_dog.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
