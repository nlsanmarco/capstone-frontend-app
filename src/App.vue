<template>
  <div id="app">
    <!-- ======== @Region: #header ======== -->
    <div id="header" class="page page-index navbar-layout-default">
      <div data-toggle="sticky">
        <!--Header search region - hidden by default -->
        <div class="header-search collapse" id="search">
          <form class="search-form container">
            <input type="text" name="search" class="form-control search" value="" placeholder="Search" />
            <button type="button" class="btn btn-link">
              <span class="sr-only">Search</span>
              <i class="fa fa-search fa-flip-horizontal search-icon"></i>
            </button>
            <button type="button" class="btn btn-link close-btn" data-toggle="search-form-close">
              <span class="sr-only">Close</span>
              <i class="fa fa-times search-icon"></i>
            </button>
          </form>
        </div>

        <!--Header & Branding region-->
        <div class="header">
          <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.html) All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm) Use .header-block to stack elements within on small screen & "float" on larger screens use .order-first or/and .order-last classes to make an element show first or last within .header-inner or .headr-block elements -->
          <div class="header-inner container">
            <!--branding/logo -->
            <div class="header-brand">
              <a class="header-brand-text" href="index.html" title="Home">
                <h1 class="h2">
                  <span class="header-brand-text-alt">App</span>
                  Strap
                  <span class="header-brand-text-alt">.</span>
                </h1>
              </a>
              <div class="header-divider d-none d-lg-block"></div>
              <div class="header-slogan d-none d-lg-block">Bootstrap 4 Theme</div>
            </div>
            <!-- other header content -->
            <div class="header-block order-12">
              <!-- mobile collapse menu button - data-toggle="collapse" = default BS menu - data-toggle="off-canvas" = Off-cavnas Menu - data-toggle="overlay" = Overlay Menu -->
              <a
                href="#top"
                class="btn btn-link btn-icon header-btn float-right d-lg-none"
                data-toggle="off-canvas"
                data-target=".navbar-main"
                data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'
              >
                <i class="fa fa-bars"></i>
              </a>
              <!--Show/hide trigger for #offcanvas-sidebar -->
            </div>

            <div class="navbar navbar-expand-md navbar-static-top">
              <!--everything within this div is collapsed on mobile-->
              <div class="navbar-main collapse">
                <!--main navigation-->
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/"
                    >
                      Home
                    </router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="!isLoggedIn()">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/signup"
                    >
                      Signup
                    </router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="!isLoggedIn()">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/login"
                    >
                      Login
                    </router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="isLoggedIn()">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/logout"
                    >
                      Logout
                    </router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      :to="`/users/${getUserId()}/edit`"
                    >
                      Edit Profile
                    </router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/api_dogs"
                    >
                      Dog Matches
                    </router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      to="/favorites"
                    >
                      Favorites
                    </router-link>
                  </li>
                </ul>
              </div>
              <!--/.navbar-collapse -->
              <!--
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle">
                      <router-link to="/favorites">Favorites</router-link>
                    </a>
                  </li> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="flashMessage">
      {{ flashMessage }}
      <button v-on:click="flashMessage = ''">Close</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.jwt;
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
