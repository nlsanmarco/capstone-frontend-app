<template>
  <div class="user-edit">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "This is a user edit page",
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
