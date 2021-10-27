import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UsersEdit from "../views/UsersEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/users/:id/edit",
    name: "users-edit",
    component: UsersEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
