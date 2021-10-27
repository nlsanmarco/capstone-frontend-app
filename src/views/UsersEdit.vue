<template>
  <div class="user-edit">
    <form v-on:submit.prevent="editUser()">
      <h1>Edit Profile</h1>
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
    </form>
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
      errors: [],
    };
  },
  created: function () {
    axios.get(`/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editUsersParams = response.data;
    });
  },
  methods: {},
};
</script>
