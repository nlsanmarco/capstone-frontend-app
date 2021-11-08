<template>
  <div class="users-edit">
    <!-- ======== @Region: #content ======== -->
    <div id="content">
      <div class="container">
        <div class="row">
          <!--main content-->
          <div class="col-md-12">
            <form v-on:submit.prevent="editUser()" id="contact-form" role="form">
              <h2 class="title-divider">
                <span>
                  Edit User
                  <span class="font-weight-normal text-muted">Us</span>
                </span>
              </h2>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input class="form-control" type="text" value="Name" id="name" v-model="editUserParams.name" />
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Email address</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="editUserParams.email"
                  />
                </div>
              </div>
              <h2 class="title-divider">
                <span>Adoption Profile</span>
              </h2>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="sr-only" for="contact-name">Name</label>
                    <input type="text" class="form-control" id="contact-name" placeholder="Name" />
                    <small id="contact-name-help" class="form-text text-muted">First and last names.</small>
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="contact-email">Email</label>
                    <input type="email" class="form-control" id="contact-email" placeholder="Email" />
                    <small id="contact-email-help" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="contact-message">Message</label>
                    <textarea rows="12" class="form-control" id="contact-message" placeholder="Message"></textarea>
                    <small id="contact-message-help" class="form-text text-muted">Your message and details.</small>
                  </div>
                  <input type="button" class="btn btn-primary" value="Send Message" />
                </div>
                <div class="col-md-6">
                  <p>
                    <abbr title="Phone"><i class="fa fa-phone"></i></abbr>
                    019223 8092344
                  </p>
                  <p>
                    <abbr title="Email"><i class="fa fa-envelope"></i></abbr>
                    info@appstrap.me
                  </p>
                  <p>
                    <abbr title="Address"><i class="fa fa-home"></i></abbr>
                    Sunshine House, Sunville. SUN12 8LU.
                  </p>
                  <p>
                    <a
                      href="https://maps.google.co.uk/maps?q=London&amp;ie=UTF8&amp;hq=&amp;hnear=London,+United+Kingdom&amp;gl=uk&amp;t=m&amp;ll=51.510238,-0.127029&amp;spn=0.042735,0.102654&amp;z=12&amp;"
                    >
                      <img src="assets/img/misc/map.png" alt="Location map" class="img-thumbnail" />
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <form v-on:submit.prevent="editUser()">
        <h2 class="title-divider">
          <span>Edit User:</span>
        </h2>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input class="form-control" type="text" value="Name" id="name" v-model="editUserParams.name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Email address</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="editUserParams.email"
            />
          </div>
        </div>
        <h2 class="title-divider">
          <span>Adoption Profile</span>
        </h2>
        <br />
        <h3><span class="font-weight-normal">Required</span></h3>

        <div>
          <fieldset class="form-group">
            <label for="has_house" class="col-sm-4 col-form-label">What type of building do you live in?</label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsHouse"
                  value="true"
                  v-model="editUserParams.lives_in_house"
                />
                House
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsHouse"
                  value="false"
                  v-model="editUserParams.lives_in_house"
                />
                Apartment or Condo
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset class="form-group">
            <label for="has_yard" class="col-sm-4 col-form-label">Do you have a yard?</label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsYard"
                  value="true"
                  v-model="editUserParams.has_yard"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsYard"
                  value="false"
                  v-model="editUserParams.has_yard"
                />
                No
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset class="form-group">
            <label for="has_dogs" class="col-sm-4 col-form-label">Do you currently have any dogs?</label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasDogs"
                  value="true"
                  v-model="editUserParams.has_dogs"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasDogs"
                  value="false"
                  v-model="editUserParams.has_dogs"
                />
                No
              </label>
            </div>
          </fieldset>
          <fieldset class="form-group">
            <label for="has_cats" class="col-sm-4 col-form-label">Do you currently have any cats?</label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasCats"
                  value="true"
                  v-model="editUserParams.has_cats"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasCats"
                  value="false"
                  v-model="editUserParams.has_cats"
                />
                No
              </label>
            </div>
          </fieldset>
          <fieldset class="form-group">
            <label for="has_children" class="col-sm-4 col-form-label">Do children live in your home?</label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasChildren"
                  value="true"
                  v-model="editUserParams.has_children"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasChildren"
                  value="false"
                  v-model="editUserParams.has_children"
                />
                No
              </label>
            </div>
          </fieldset>
          <fieldset class="form-group">
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-prepend">How many hours are you gone during the day?</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="hours away"
                v-model="editUserParams.hours_away_per_day"
              />
            </div>
          </fieldset>
          <fieldset class="form-group">
            <label for="training_exp" class="col-sm-4 col-form-label">
              Do you have experience with obedience training?
            </label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasTraining"
                  value="true"
                  v-model="editUserParams.dog_training_experience"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasTraining"
                  value="false"
                  v-model="editUserParams.dog_training_experience"
                />
                No
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <h3><span class="font-weight-normal">Optional</span></h3>
          <fieldset class="form-group">
            <div class="form-group">
              <label class="mr-sm-2" for="BreedSelect">Preferred Breed:</label>
              <select
                class="form-control mb-2 mr-sm-2 mb-sm-0"
                id="breedSelect"
                v-model="editUserParams.preferred_breed"
              >
                <option value="">None</option>
                <option v-for="breed in breeds" v-bind:key="breed.id">{{ breed }}</option>
              </select>
            </div>
          </fieldset>
          <fieldset class="form-group">
            <div class="form-group">
              <label class="mr-sm-2" for="SizeSelect">Preferred Size:</label>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="preferredSize"
                    id="preferredSize"
                    value="small"
                    v-model="preferred_size"
                  />
                  small
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="preferredSize"
                    id="preferredSize"
                    value="medium"
                    v-model="preferred_size"
                  />
                  medium
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="preferredSize"
                    id="preferredSize"
                    value="large"
                    v-model="preferred_size"
                  />
                  large
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="preferredSize"
                    id="preferredSize"
                    value="xlarge"
                    v-model="preferred_size"
                  />
                  x-large
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="form-group">
            <label for="preferred" class="col-sm-4 col-form-label">
              Do you have experience with obedience training?
            </label>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasTraining"
                  value="true"
                  v-model="editUserParams.dog_training_experience"
                />
                Yes
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="hasTraining"
                  value="false"
                  v-model="editUserParams.dog_training_experience"
                />
                No
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          Preferred Gender:
          <input type="radio" v-model="editUserParams.preferred_gender" value="female" />
          Female
          <input type="radio" v-model="editUserParams.preferred_gender" value="male" />
          Male
          <input type="radio" v-model="editUserParams.preferred_gender" value="" />
          No preference
        </div>
        <div>
          Preferred Age:
          <input type="checkbox" v-model="preferred_age" value="baby" />
          baby
          <input type="checkbox" v-model="preferred_age" value="young" />
          young
          <input type="checkbox" v-model="preferred_age" value="adult" />
          adult
          <input type="checkbox" v-model="preferred_age" value="senior" />
          senior
        </div>
        <div>
          Are you interested in adopting a special needs dog?
          <input type="radio" v-model="editUserParams.special_needs" value="true" />
          Yes
          <input type="radio" v-model="editUserParams.special_needs" value="false" />
          No
          <input type="radio" v-model="editUserParams.special_needs" value="" />
          No preference
        </div>
        <input type="submit" value="Update Profile" />
      </form>
    </div>
    <button v-on:click="destroyUser()">Delete User</button>
    <br />
    <router-link to="/api_dogs" class="btn btn-outline-secondary">See Matches</router-link>
    <br />
    editUserParams: {{ editUserParams }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editUserParams: {
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
      preferred_size: [],
      preferred_age: [],
      breeds: [],
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/me").then((response) => {
      console.log(response.data);
      this.editUserParams = response.data;
    });
    axios.get("/breeds").then((response) => {
      console.log(response.data);
      this.breeds = response.data;
    });
  },
  methods: {
    editUser: function () {
      this.editUserParams.preferred_size = this.preferred_size.join(",");
      this.editUserParams.preferred_age = this.preferred_age.join(",");
      axios
        .patch("/users/me", this.editUserParams)
        .then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "Profile successfully updated";
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function () {
      if (confirm("Are you sure you want to delete this user?")) {
        axios.delete("/users/me").then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "User successfully deleted.";
          this.$router.push("/login");
        });
      }
    },
  },
};
</script>
