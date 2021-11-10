<template>
  <div class="dogs-show">
    <div id="content">
      <div class="container">
        <h2 class="title-divider">
          <span>
            Pupple
            <span class="font-weight-normal text-muted">Profile</span>
          </span>
          <small>
            <router-link to="/api_dogs">
              <i class="fas fa-angle-left"></i>
              back to matches
            </router-link>
          </small>
        </h2>
        <!--Main Content-->
        <div class="col-md-12">
          <!-- Blog post -->
          <div class="row blog-post">
            <div class="media-body">
              <!--Main content of post-->

              <div class="row">
                <div class="col-md-4 img-fluid">
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div v-for="photo in api_dog.photos" v-bind:key="photo.id" :class="{ active: api_dog.photos[0] }">
                        <img class="d-block w-100" :src="photo.medium" alt="Dog Image" />
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="col-12">
                    <h3 class="title media-heading">{{ api_dog.name }}</h3>
                    <p>age: {{ api_dog.age }}</p>
                    <p>primary breed: {{ api_dog.breeds.primary }}</p>
                    <p v-if="api_dog.breeds.secondary !== null">secondary breed: {{ api_dog.breeds.secondary }}</p>
                    <p>gender: {{ api_dog.gender }}</p>
                    <p>size: {{ api_dog.size }}</p>
                    <p>
                      description: {{ api_dog.description }}
                      <a :href="api_dog.url" class="btn btn-outline-secondary">more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <div v-if="api_dog.attributes.house_trained">
                    <h5>Training:</h5>
                    <ul class="list-unstyled list-md">
                      <li v-if="api_dog.attributes.house_trained === true">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        House Trained
                      </li>
                      <li v-if="api_dog.attributes.house_trained === false">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Not House Trained
                      </li>
                    </ul>
                  </div>
                  <div
                    v-if="
                      api_dog.environment.dogs == true ||
                      api_dog.environment.cats == true ||
                      api_dog.environment.children == true
                    "
                  >
                    <h5>Good in a house with:</h5>
                    <ul class="list-unstyled list-md">
                      <li v-if="api_dog.environment.dogs === true">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Dogs
                      </li>
                      <li v-if="api_dog.environment.cats === true">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Cats
                      </li>
                      <li v-if="api_dog.environment.children === true">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Children
                      </li>
                    </ul>
                  </div>
                  <div
                    v-if="
                      api_dog.environment.dogs == false ||
                      api_dog.environment.cats == false ||
                      api_dog.environment.children == false
                    "
                  >
                    <h5>Prefers a home without:</h5>
                    <ul class="list-unstyled list-md">
                      <li v-if="api_dog.environment.dogs === false">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Dogs
                      </li>
                      <li v-if="api_dog.environment.cats === false">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Cats
                      </li>
                      <li v-if="api_dog.environment.children === false">
                        <i class="fa fa-check text-primary list-item-icon"></i>
                        Children
                      </li>
                    </ul>
                  </div>
                  <h5>Medical:</h5>
                  <ul class="list-unstyled list-md">
                    <li v-if="api_dog.attributes.shots_current === true">
                      <i class="fa fa-check text-primary list-item-icon"></i>
                      Vaccinations up to date
                    </li>
                    <li v-if="api_dog.attributes.shots_current === false">
                      <i class="fa fa-check text-primary list-item-icon"></i>
                      Some vaccinations needed
                    </li>
                    <li v-if="api_dog.attributes.spayed_neutered === true">
                      <i class="fa fa-check text-primary list-item-icon"></i>
                      Spayed / Neutered
                    </li>
                    <li v-if="api_dog.attributes.spayed_neutered === false">
                      <i class="fa fa-check text-primary list-item-icon"></i>
                      Not Spayed / Neutered
                    </li>
                    <li v-if="api_dog.attributes.special_needs === true">
                      <i class="fa fa-check text-primary list-item-icon"></i>
                      Special Needs
                    </li>
                  </ul>
                  <div v-if="api_dog.favorite_dog === false">
                    <button v-on:click="makeFavorite()">Favorite</button>
                  </div>
                  <br />
                  <router-link to="/api_dogs" class="btn btn-outline-secondary">back to matches</router-link>
                </div>
                <div class="col-md-6">
                  <h4><span class="font-weight-bold">Rescue Agency</span></h4>
                  <p>
                    {{ organization.name }}
                    <br />
                  </p>
                  location:
                  <div v-if="organization.address.address1">
                    {{ organization.address.address1 }}
                  </div>
                  <div v-if="organization.address.address2">
                    {{ organization.address.address2 }}
                  </div>
                  {{ organization.address.city }},{{ organization.address.state }}
                  <br />
                  <br />
                  <p>
                    phone:{{ organization.phone }}
                    <br />
                    email:{{ organization.email }}
                  </p>
                  <div
                    v-if="
                      organization.hours.monday ||
                      organization.hours.tuesday ||
                      organization.hours.wednesday ||
                      organization.hours.thursday ||
                      organization.hours.friday ||
                      organization.hours.saturday ||
                      organization.hours.sunday
                    "
                  >
                    <br />
                    Agency Hours:
                    <h4 v-if="organization.hours.monday">Monday: {{ organization.hours.monday }}</h4>
                    <h4 v-if="organization.hours.tuesday">Tuesday: {{ organization.hours.tuesday }}</h4>
                    <h4 v-if="organization.hours.wednesday">Wednesday: {{ organization.hours.wednesday }}</h4>
                    <h4 v-if="organization.hours.thursday">Thursday: {{ organization.hours.thursday }}</h4>
                    <h4 v-if="organization.hours.friday">Friday: {{ organization.hours.friday }}</h4>
                    <h4 v-if="organization.hours.saturday">Saturday: {{ organization.hours.saturday }}</h4>
                    <h4 v-if="organization.hours.sunday">Sunday: {{ organization.hours.sunday }}</h4>
                  </div>
                  <br />

                  <a :href="organization.website" class="btn btn-outline-secondary">agency website</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="photo in api_dog.photos" v-bind:key="photo.id">
        <img :src="photo.medium" />
      </div>
    </div>
    <br />
  </div>
</template>

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
        favorite_dog: "",
      },
      organization: {
        name: "",
        email: "",
        phone: "",
        address: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          postcode: "",
        },
        hours: {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        },
        website: "",
      },
    };
  },
  created: function () {
    axios.get(`/api_dogs/${this.$route.params.api_dog_id}`).then((response) => {
      this.api_dog = response.data;
      axios.get(`/organizations/${this.api_dog.organization_id}`).then((response) => {
        this.organization = response.data;
        console.log(this.organization);
      });
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
