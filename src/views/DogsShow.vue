<template>
  <div class="dogs-show">
    <div>
      <h1>Pupper Profile!</h1>
      <h2>name: {{ api_dog.name }}</h2>
      <h4>age: {{ api_dog.age }}</h4>
      <h4>main breed: {{ api_dog.breeds.primary }}</h4>
      <h4>gender {{ api_dog.gender }}</h4>
      <h4>size: {{ api_dog.size }}</h4>
      <h4>location: {{ api_dog.city }},{{ api_dog.state }}</h4>
      <h4>description: {{ api_dog.description }}</h4>
    </div>
    <router-link :to="`/movies/${movie.id}/edit`">Edit</router-link>
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
      movie: {},
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
      axios.delete(`/movies/${this.movie.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
