<template>
  <div class="dogs-show">
    <div>
      <h1>Pupper Profile</h1>
      <h2>name: {{ api_dog.name }}</h2>
      <h4>age: {{ api_dog.age }}</h4>
      <h4>main breed: {{ api_dog.breeds.primary }}</h4>
      <h4>gender: {{ api_dog.gender }}</h4>
      <h4>size: {{ api_dog.size }}</h4>
      <h4>location: {{ api_dog.contact.address.city }},{{ api_dog.contact.address.state }}</h4>
      <h4>description: {{ api_dog.description }}</h4>
      <div v-for="photo in api_dog.photos.medium" v-bind:key="photo.id">
        <img :src="api_dog.photo" />
      </div>
    </div>
    <br />
    <button v-on:click="makeFavorite()">Favorite</button>
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
