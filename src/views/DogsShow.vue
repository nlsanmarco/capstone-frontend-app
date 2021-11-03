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
      <h4>
        description: {{ api_dog.description }}
        <a :href="api_dog.url" class="btn btn-outline-secondary">more</a>
      </h4>

      <!-- <h2>Rescue Agency:{{}}</h2> -->
      <h4>
        location: {{ api_dog.contact.address.address1 }} {{ api_dog.contact.address.address2 }}
        <br />
        {{ api_dog.contact.address.city }},{{ api_dog.contact.address.state }}
      </h4>
      <h4 v-if="api_dog.distance">distance: {{ api_dog.distance }}miles</h4>
      <!-- <h4>website:</h4> -->
      <h4>phone:{{ api_dog.contact.phone }}</h4>
      <h4>email:{{ api_dog.contact.email }}</h4>
      <h2>Training:</h2>
      <h4 v-if="api_dog.attributes.house_trained === true">house trained</h4>
      <h4 v-if="api_dog.attributes.house_trained === false">not house trained</h4>
      <div v-if="api_dog.environment.dogs || api_dog.environment.cats || api_dog.environment.children">
        <h2>Good in a house with:</h2>
        <h4 v-if="api_dog.environment.dogs === true">dogs</h4>
        <h4 v-if="api_dog.environment.cats === true">cats</h4>
        <h4 v-if="api_dog.environment.children === true">children</h4>
      </div>
      <div v-if="api_dog.environment.dogs || api_dog.environment.cats || api_dog.environment.children">
        <h2>Prefers a home without:</h2>
        <h4 v-if="api_dog.environment.dogs === false">dogs</h4>
        <h4 v-if="api_dog.environment.cats === false">cats</h4>
        <h4 v-if="api_dog.environment.children === false">children</h4>
      </div>
      <h2>Medical:</h2>
      <h4 v-if="api_dog.attributes.shots_current === true">Vaccinations up to date</h4>
      <h4 v-if="api_dog.attributes.shots_current === false">Some vaccinations needed</h4>
      <h4 v-if="api_dog.attributes.spayed_neutered === true">spayed/neutered</h4>
      <h4 v-if="api_dog.attributes.spayed_neutered === false">not spayed/neutered</h4>
      <h1 v-if="api_dog.attributes.special_needs === true">special needs</h1>
      <div v-for="photo in api_dog.photos" v-bind:key="photo.id">
        <img :src="photo.medium" />
      </div>
    </div>
    <br />
    {{ api_dog.id }}
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
    };
  },
  created: function () {
    axios.get(`/api_dogs/${this.$route.params.api_dog_id}`).then((response) => {
      this.api_dog = response.data;
    });
  },
  methods: {
    makeFavorite: function () {
      this.api_dog.id = this.api_dog.id.toString();
      var params = {
        user_id: localStorage.getItem("user_id"),
        api_dog_id: this.api_dog.id,
      };
      axios.post("/favorites", params).then((response) => {
        console.log(response.data);
        console.log(this.api_dog.id);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
