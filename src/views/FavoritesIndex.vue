<template>
  <div class="favorites-index">
    <div id="content">
      <div class="container">
        <h2 class="title-divider">
          <span>
            Your
            <span class="font-weight-normal text-muted">Favorites</span>
          </span>
          <small>The cutest of the cuties</small>
        </h2>
        <div class="form-group row mb-2">
          <label for="ageFilter" class="col-md-2 text-align-right align-self-center font-weight-light">
            Filter by age or name
          </label>
          <div class="col-md-4 col-8 mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="baby, young, adult, senior or name"
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
                  v-for="favorite in filterBy(favorites, ageFilter, 'api_dog.age', 'api_dog.name')"
                  v-bind:key="favorite.id"
                >
                  <div class="blog-post">
                    <div class="blog-media">
                      <router-link :to="`/api_dogs/${favorite.api_dog.id}`">
                        <img class="img-fluid" :src="favorite.api_dog.photos[0].large" />
                      </router-link>
                    </div>
                    <div class="mt-4">
                      <h4 class="timeline-item-title">
                        <p class="lead font-weight-normal text-x2 text-primary">
                          {{ favorite.api_dog.name }}
                        </p>
                      </h4>

                      <h4 class="timeline-item-description font-weight-lighter">
                        Age:
                        {{ favorite.api_dog.age }}
                      </h4>

                      <h4 class="timeline-item-description font-weight-lighter">
                        Primary Breed: {{ favorite.api_dog.breeds.primary }}
                      </h4>
                      <h4
                        class="timeline-item-description font-weight-lighter"
                        v-if="favorite.api_dog.breeds.secondary !== null"
                      >
                        Secondary Breed: {{ favorite.api_dog.breeds.secondary }}
                      </h4>
                      <h4 class="timeline-item-description font-weight-lighter">
                        Location: {{ favorite.api_dog.contact.address.city }},
                        {{ favorite.api_dog.contact.address.state }}
                      </h4>
                      <router-link class="btn btn-link" :to="`/api_dogs/${favorite.api_dog.id}`">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </router-link>
                      <br />
                      <router-link to="/api_dogs" class="btn btn-link">
                        <i class="fas fa-angle-left"></i>
                        back to matches
                      </router-link>
                      <br />
                      <button class="btn btn-link text-red-dark" v-on:click="removeFavorite(favorite)">
                        <i class="fas fa-heart-broken"></i>
                        remove {{ favorite.api_dog.name }}
                      </button>
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
