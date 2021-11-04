<template>
  <div class="users-edit">
    <form v-on:submit.prevent="editUser()">
      <h1>Edit User</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        email:
        <input type="text" v-model="editUserParams.email" />
      </div>
      <div>
        Name:
        <input type="text" v-model="editUserParams.name" />
      </div>
      <div>
        Location (zip):
        <input type="text" v-model="editUserParams.location" />
      </div>
      <h1>Adoption Profile</h1>
      <h2>Required</h2>
      <div>
        I live in a
        <input type="radio" v-model="editUserParams.lives_in_house" value="true" />
        house

        <input type="radio" v-model="editUserParams.lives_in_house" value="false" />
        apartment or condo
      </div>
      <div>
        Do you have a yard?
        <input type="radio" v-model="editUserParams.has_yard" value="true" />
        Yes
        <input type="radio" v-model="editUserParams.has_yard" value="false" />
        No
      </div>
      <div>
        My household has dogs
        <input type="radio" v-model="editUserParams.has_dogs" value="true" />
        Yes
        <input type="radio" v-model="editUserParams.has_dogs" value="false" />
        No
        <br />
        has cats
        <input type="radio" v-model="editUserParams.has_cats" value="true" />
        Yes
        <input type="radio" v-model="editUserParams.has_cats" value="false" />
        No
        <br />
        has children
        <input type="radio" v-model="editUserParams.has_children" value="true" />
        Yes
        <input type="radio" v-model="editUserParams.has_children" value="false" />
        No
      </div>
      <div>
        Approximately how many hours per day are you away from home?
        <input type="text" v-model="editUserParams.hours_away_per_day" />
      </div>
      <div>
        Do you have experience with obedience training?
        <input type="radio" v-model="editUserParams.dog_training_experience" value="true" />
        Yes
        <input type="radio" v-model="editUserParams.dog_training_experience" value="false" />
        No
      </div>
      <div><h2>Optional</h2></div>
      <div>
        Preferred Breed:
        <select v-model="editUserParams.preferred_breed">
          <option value="">None</option>
          <option v-for="breed in breeds" v-bind:key="breed.id">
            {{ breed }}
          </option>
        </select>
      </div>
      <div>
        Preferred size:
        <input type="checkbox" v-model="preferred_size" value="small" />
        small
        <input type="checkbox" v-model="preferred_size" value="medium" />
        medium
        <input type="checkbox" v-model="preferred_size" value="large" />
        large
        <input type="checkbox" v-model="preferred_size" value="xlarge" />
        x-large
        <br />
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
      </div>
      <input type="submit" value="Update Profile" />
    </form>
    <button v-on:click="destroyUser()">Delete User</button>
    <br />
    <router-link to="/api_dogs" class="btn btn-outline-secondary">See Matches</router-link>
    <br />
    editUserParams: {{ editUserParams }}
  </div>
</template>

<style></style>

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
