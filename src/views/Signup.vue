<template>
  <div id="content">
    <div class="container">
      <form class="form-login form-wrapper form-medium" role="form" v-on:submit.prevent="submit()">
        <h3 class="title-divider">
          <span>Sign Up</span>
          <small class="mt-4">
            Already signed up?
            <router-link to="/login">Login</router-link>
          </small>
        </h3>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <div class="form-group">
            <label class="sr-only" for="signup-first-name-page">Name</label>
            <input
              type="text"
              class="form-control"
              id="signup-first-name-page"
              placeholder="Name"
              v-model="newUserParams.name"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="sr-only" for="signup-email-page">Email address</label>
          <input
            type="email"
            class="form-control"
            id="signup-email-page"
            placeholder="Email address"
            v-model="newUserParams.email"
          />
        </div>
        <div class="form-group">
          <label class="sr-only" for="signup-password-page">Password</label>
          <input
            type="password"
            class="form-control"
            id="signup-password-page"
            placeholder="Password"
            v-model="newUserParams.password"
          />
        </div>
        <div class="form-group">
          <label class="sr-only" for="signup-password-page">Password Confirmation</label>
          <input
            type="password"
            class="form-control"
            id="signup-password-page"
            placeholder="Password Confirmation"
            v-model="newUserParams.password_confirmation"
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
