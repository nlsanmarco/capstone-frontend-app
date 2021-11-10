<template>
  <div class="dogs-show">
    <div id="content">
      <div class="container pt-2 pb-6">
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
                  <div>
                    <img :src="api_dog.photos[0].medium" />
                  </div>
                </div>
                <div class="col">
                  <div class="col-12">
                    <h3 class="title media-heading">{{ api_dog.name }}</h3>
                    <h4>
                      age:
                      <span class="font-weight-lighter">{{ api_dog.age }}</span>
                    </h4>
                    <h4>
                      primary breed:
                      <span class="font-weight-lighter">{{ api_dog.breeds.primary }}</span>
                    </h4>
                    <h4 v-if="api_dog.breeds.secondary !== null">
                      secondary breed:
                      <span class="font-weight-lighter">{{ api_dog.breeds.secondary }}</span>
                    </h4>
                    <h4>
                      gender:
                      <span class="font-weight-lighter">{{ api_dog.gender }}</span>
                    </h4>
                    <h4>
                      size:
                      <span class="font-weight-lighter">{{ api_dog.size }}</span>
                    </h4>
                    <h4>
                      description:
                      <span class="font-weight-lighter">{{ api_dog.description }}</span>
                      <a :href="api_dog.url" class="btn btn-link">more</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4">
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
                    <button class="btn btn-link text-red-dark" v-on:click="makeFavorite()">
                      <i class="far fa-heart"></i>
                      make {{ api_dog.name }} a favorite
                    </button>
                  </div>
                </div>
                <div class="col-md-8">
                  <h4><span>Rescue Agency</span></h4>
                  <div class="row">
                    <div class="col-6">
                      <br />
                      <h5>
                        {{ organization.name }}
                      </h5>

                      <h5>
                        location:
                        <div v-if="organization.address.address1">
                          <span class="font-weight-lighter">{{ organization.address.address1 }}</span>
                        </div>
                        <div v-if="organization.address.address2">
                          <span class="font-weight-lighter">{{ organization.address.address2 }}</span>
                        </div>
                        <span class="font-weight-lighter">
                          {{ organization.address.city }},{{ organization.address.state }}
                        </span>
                      </h5>
                      <h5>
                        phone:
                        <span class="font-weight-lighter">{{ organization.phone }}</span>
                      </h5>
                      <h5>
                        email:
                        <span class="font-weight-lighter">{{ organization.email }}</span>
                      </h5>
                      <div class="row">
                        <div class="col">
                          <a :href="organization.website" class="btn btn-outline-primary">
                            <i class="fas fa-dog"></i>
                            agency website
                          </a>
                        </div>

                        <div class="col">2 of 2</div>
                      </div>
                    </div>
                    <div class="col-4">
                      <br />
                      <br />
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
                        <h5>Agency Hours:</h5>
                        <h5 v-if="organization.hours.monday">
                          Monday:
                          <span class="font-weight-lighter">{{ organization.hours.monday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.tuesday">
                          Tuesday:
                          <span class="font-weight-lighter">{{ organization.hours.tuesday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.wednesday">
                          Wednesday:
                          <span class="font-weight-lighter">{{ organization.hours.wednesday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.thursday">
                          Thursday:
                          <span class="font-weight-lighter">{{ organization.hours.thursday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.friday">
                          Friday:
                          <span class="font-weight-lighter">{{ organization.hours.friday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.saturday">
                          Saturday:
                          <span class="font-weight-lighter">{{ organization.hours.saturday }}</span>
                        </h5>
                        <h5 v-if="organization.hours.sunday">
                          Sunday:
                          <span class="font-weight-lighter">{{ organization.hours.sunday }}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="api_dog.photos.length > 1" class="row">
            <div class="post-related-content">
              <h4>More Photos</h4>
              <div class="row">
                <div v-for="photo in api_dog.photos" v-bind:key="photo.id" class="col-md-4 blog-post">
                  <div class="blog-media">
                    <img :src="photo.medium" alt="Picture of frog by Ben Fredericson" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
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
