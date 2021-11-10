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
                <span>Edit User</span>
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
                  <h4><span class="font-weight-bold">Required</span></h4>
                  <div class="form-group">
                    <label for="has_house" class="col-form-label">What type of building do you live in?</label>
                    <div class="form-check">
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
                    <div class="form-check">
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

                    <label for="has_yard" class="col-form-label">Do you have a yard?</label>
                    <div class="form-check">
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
                    <div class="form-check">
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

                    <label for="has_dogs" class="col-form-label">Do you currently have any dogs?</label>
                    <div class="form-check">
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
                    <div class="form-check">
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

                    <label for="has_cats" class="col-form-label">Do you currently have any cats?</label>
                    <div class="form-check">
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
                    <div class="form-check">
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

                    <label for="has_children" class="col-form-label">Do children live in your home?</label>
                    <div class="form-check">
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
                    <div class="form-check">
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

                    <label for="hours-away-text-input" class="col-form-label">
                      How many hours are you gone during the day?
                    </label>
                    <div class="col-2">
                      <input
                        class="form-control"
                        type="text"
                        v-model="editUserParams.hours_away_per_day"
                        id="hours-away-input"
                      />
                    </div>
                    <label for="training_exp" class="col-form-label">
                      Do you have experience with obedience training?
                    </label>
                    <div class="form-check">
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
                    <div class="form-check">
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
                  </div>
                </div>
                <div class="col-md-6">
                  <h4><span class="font-weight-bold">Optional</span></h4>
                  <div class="form-group">
                    <label class="col-form-label" for="BreedSelect">Preferred Breed:</label>
                    <select class="form-control" id="breedSelect" v-model="editUserParams.preferred_breed">
                      <option value="">None</option>
                      <option v-for="breed in breeds" v-bind:key="breed.id">{{ breed }}</option>
                    </select>
                    <label class="col-form-label" for="SizeSelect">Preferred Size:</label>
                    <div class="row col-10">
                      <div class="form-check-inline">
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
                      <div class="form-check-inline">
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
                      <div class="form-check-inline">
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
                      <div class="form-check-inline">
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
                    <label for="preferred_gender" class="col-form-label">Preferred Gender:</label>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionsGender"
                          value="female"
                          v-model="editUserParams.preferred_gender"
                        />
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionsGender"
                          value="male"
                          v-model="editUserParams.preferred_gender"
                        />
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionsGender"
                          value=""
                          v-model="editUserParams.preferred_gender"
                        />
                        no preference
                      </label>
                    </div>
                    <label class="col-form-label" for="SizeSelect">Preferred Age:</label>
                    <div class="row col-10">
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            name="preferredAge"
                            id="preferredAge"
                            value="baby"
                            v-model="preferred_age"
                          />
                          baby
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            name="preferredAge"
                            id="preferredAge"
                            value="young"
                            v-model="preferred_age"
                          />
                          young
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            name="preferredAge"
                            id="preferredAge"
                            value="adult"
                            v-model="preferred_age"
                          />
                          adult
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            name="preferredAge"
                            id="preferredAge"
                            value="senior"
                            v-model="preferred_age"
                          />
                          senior
                        </label>
                      </div>
                    </div>
                    <label for="special_needs" class="col-form-label">
                      Are you interested in adopting a special needs dog?
                    </label>
                    <div class="form-check">
                      <label class="form-check-label">
                        <!-- <input
                        type="checkbox"
                        data-toggle="switch"
                        checked
                        data-on-color="primary"
                        data-off-color="default"
                      /> -->
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionSpecialNeeds"
                          value="true"
                          v-model="editUserParams.special_needs"
                        />
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionSpecialNeeds"
                          value="false"
                          v-model="editUserParams.special_needs"
                        />
                        No
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="optionsSpecialNeeds"
                          value=""
                          v-model="editUserParams.special_needs"
                        />
                        no preference
                      </label>
                    </div>
                  </div>
                  <input type="submit" class="btn btn-primary" value="Update Profile" />
                  <br />
                  <router-link to="/api_dogs" class="btn btn-outline-secondary">See Matches</router-link>
                  <br />
                  <button class="mb-2 btn btn-outline-danger" v-on:click="destroyUser()">Delete User</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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

          this.$router.push("/login");
        });
      }
    },
  },
};
</script>
