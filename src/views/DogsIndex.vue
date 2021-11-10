<template>
  <div class="dogs-index">
    <div id="content">
      <div class="container">
        <h2 class="title-divider">
          <span>
            Your
            <span class="font-weight-normal text-muted">Matches</span>
          </span>
          <small>Aren't we cute?</small>
        </h2>
        <div class="form-group row mb-2">
          <label for="ageFilter" class="col-md-4 col-form-label">Filter by age</label>
          <div class="col-md-4 col-8 mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="baby, young, adult or senior"
              v-model="ageFilter"
              list="ages"
            />
          </div>
        </div>

        <div class="row">
          <!--Blog Grid -->
          <div class="col-md-auto">
            <div
              class="blog-roll blog-grid"
              data-toggle="isotope-grid"
              data-isotope-options='{"itemSelector": ".grid-item"}'
            >
              <div class="row">
                <!--Timeline item 1-->
                <div
                  class="col-sm-6 col-md-4 grid-item"
                  v-for="api_dog in filterBy(api_dogs, ageFilter, 'age')"
                  v-bind:key="api_dog.id"
                >
                  <div class="blog-post" v-if="api_dog.primary_photo_cropped !== null">
                    <div class="blog-media">
                      <router-link :to="`/api_dogs/${api_dog.id}`">
                        <img class="img-fluid" :src="api_dog.photos[0].large" />
                      </router-link>
                    </div>
                    <div class="mt-4">
                      <h4 class="timeline-item-title">
                        <a href="#">{{ api_dog.name }}</a>
                      </h4>

                      <h4 class="timeline-item-description">Age: {{ api_dog.age }}</h4>

                      <h4 class="timeline-item-description">Primary Breed: {{ api_dog.breeds.primary }}</h4>
                      <h4 class="timeline-item-description" v-if="api_dog.breeds.secondary !== null">
                        Secondary Breed: {{ api_dog.breeds.secondary }}
                      </h4>
                      <h4 class="timeline-item-description">
                        Location: {{ api_dog.contact.address.city }}, {{ api_dog.contact.address.state }}
                      </h4>
                      <router-link class="btn btn-link" :to="`/api_dogs/${api_dog.id}`">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--.container-->
    </div>
  </div>
</template>

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
