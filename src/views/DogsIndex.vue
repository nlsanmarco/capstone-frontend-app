<template>
  <div class="dogs-index">
    <p class="col-md-8 fs-4">Search by age (baby, young, adult or senior)</p>
    <div class="row">
      <div class="col-md-12 col-lg-8 mb-2">
        <input type="text" class="form-control" placeholder="Search" v-model="ageFilter" list="ages" />
      </div>
    </div>

    <h1>Your Matches</h1>
    <div v-for="api_dog in filterBy(api_dogs, ageFilter, 'age')" v-bind:key="api_dog.id">
      <div v-if="api_dog.primary_photo_cropped !== null">
        <h2>Name: {{ api_dog.name }}</h2>
        <h4>Age: {{ api_dog.age }}</h4>
        <h4>Primary Breed: {{ api_dog.breeds.primary }}</h4>
        <h4 v-if="api_dog.breeds.secondary !== null">Secondary Breed: {{ api_dog.breeds.secondary }}</h4>
        <h4>Location: {{ api_dog.contact.address.city }}, {{ api_dog.contact.address.state }}</h4>
        <router-link :to="`/api_dogs/${api_dog.id}`"><img :src="api_dog.primary_photo_cropped.small" /></router-link>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      ageFilter: "",
      api_dogs: [
        {
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
      ],
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
