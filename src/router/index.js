import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersEdit from "../views/UsersEdit.vue";
import DogsIndex from "../views/DogsIndex.vue";
import DogsShow from "../views/DogsShow.vue";
import FavoritesIndex from "../views/FavoritesIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },

  {
    path: "/users/:id/edit",
    name: "users-edit",
    component: UsersEdit,
  },

  {
    path: "/api_dogs",
    name: "dogs-index",
    component: DogsIndex,
  },

  {
    path: "/api_dogs/:api_dog_id",
    name: "dogs-show",
    component: DogsShow,
  },

  {
    path: "/favorites",
    name: "favorites-index",
    component: FavoritesIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
