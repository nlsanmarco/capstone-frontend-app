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
        My household
        <input type="checkbox" v-model="editUserParams.has_dogs" :value="editUserParams.has_dogs" />
        has dogs
        <input type="checkbox" v-model="editUserParams.has_cats" :value="editUserParams.has_cats" />
        has cats
        <input type="checkbox" v-model="editUserParams.has_children" :value="editUserParams.has_children" />
        has children
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
        <select name="breeds">
          <option :value="editUserParams.preferred_breed">None</option>
          <option v-for="breed in breeds" v-bind:key="breed" :value="editUserParams.preferred_breed">
            {{ breed }}
          </option>
        </select>
      </div>
      <div>
        Preferred size:
        <input type="radio" v-model="editUserParams.preferred_size" value="small" />
        small
        <input type="radio" v-model="editUserParams.preferred_size" value="medium" />
        medium
        <input type="radio" v-model="editUserParams.preferred_size" value="large" />
        large
        <input type="radio" v-model="editUserParams.preferred_size" value="xlarge" />
        x-large
      </div>
      <div>
        Preferred Gender:
        <input type="radio" v-model="editUserParams.preferred_gender" value="female" />
        Female
        <input type="radio" v-model="editUserParams.preferred_gender" value="male" />
        Male
      </div>
      <div>
        Preferred Age:
        <input type="radio" v-model="editUserParams.preferred_age" value="baby" />
        baby
        <input type="radio" v-model="editUserParams.preferred_age" value="young" />
        young
        <input type="radio" v-model="editUserParams.preferred_age" value="adult" />
        adult
        <input type="radio" v-model="editUserParams.preferred_age" value="senior" />
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
    <!-- <button v-on:click="findMatches()">Show matches</button> -->
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
      editUserParams: {},
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
    // findMatches: function () {
    //   axios.post("/api_dogs").then((response) => {
    //     console.log(response.data);
    //   });
    // },
    destroyUser: function () {
      if (confirm("Are you sure you want to delete this user?")) {
        axios.delete(`/users/${this.editUserParams.id}`).then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "User successfully deleted.";
          this.$router.push("/login");
        });
      }
    },
  },
};
</script>
