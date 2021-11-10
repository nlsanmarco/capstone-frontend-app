<template>
  <div id="content">
    <div class="container">
      <!-- Login form -->
      <form class="form-login form-wrapper form-narrow" v-on:submit.prevent="submit()">
        <h3 class="title-divider">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <span>Login</span>
          <small class="mt-4">
            Not signed up?
            <router-link to="/signup">Sign Up Here</router-link>
          </small>
        </h3>
        <div class="form-group">
          <label class="sr-only" for="login-email-page">Email</label>
          <input
            type="email"
            id="login-email-page"
            class="form-control email"
            placeholder="Email"
            v-model="newSessionParams.email"
          />
        </div>
        <div class="form-group">
          <label class="sr-only" for="login-password-page">Password</label>
          <input
            type="password"
            id="login-password-page"
            class="form-control password"
            placeholder="Password"
            v-model="newSessionParams.password"
          />
        </div>
        <input type="submit" value="Login" class="btn btn-primary" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push(`/users/${response.data.user_id}/edit`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.newSessionParams = {};
        });
    },
  },
};
</script>
