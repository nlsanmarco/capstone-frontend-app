<template>
  <div id="app">
    <!-- ======== @Region: #header ======== -->
    <div id="header">
      <!--Header upper region-->
      <div class="header-upper">
        <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.htm) All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm) Use .header-block to stack elements within on small screen & "float" on larger screens use .order-first or/and .order-last classes to make an element show first or last within .header-inner or .headr-block elements -->
        <div class="header-inner container">
          <!--user menu-->
          <div class="header-block-flex order-1 mr-auto">
            <nav class="nav nav-sm header-block-flex">
              <a class="nav-link d-md-none" href="login.html"><i class="fa fa-user"></i></a>
              <a class="nav-link text-xs text-uppercase d-none d-md-block" href="#signup-modal" data-toggle="modal">
                Sign Up
              </a>
              <a class="nav-link text-xs text-uppercase d-none d-md-block" href="#login-modal" data-toggle="modal">
                Login
              </a>
            </nav>
            <div class="header-divider header-divider-sm"></div>
            <!--language menu-->
            <div class="dropdown dropdowns-no-carets">
              <a href="#en" class="nav-link text-xs p-0 dropdown-toggle ml-1" data-toggle="dropdown">
                <i class="flag-icon flag-icon-gb"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-sm rounded dropdown-menu-arrow border-w-2 ml-2-neg">
                <a href="#es" class="dropdown-item lang-es">
                  <i class="flag-icon flag-icon-es"></i>
                  Spanish
                </a>
                <a href="#pt" class="dropdown-item lang-pt">
                  <i class="flag-icon flag-icon-pt"></i>
                  Portguese
                </a>
                <a href="#cn" class="dropdown-item lang-cn">
                  <i class="flag-icon flag-icon-cn"></i>
                  Chinese
                </a>
                <a href="#se" class="dropdown-item lang-se">
                  <i class="flag-icon flag-icon-se"></i>
                  Swedish
                </a>
              </div>
            </div>
          </div>
          <!--social media icons-->
          <div class="nav nav-icons header-block order-12">
            <!--@todo: replace with company social media details-->
            <a href="#" class="nav-link">
              <i class="fab fa-twitter-square icon-1x"></i>
              <span class="sr-only">Twitter</span>
            </a>
            <a href="#" class="nav-link">
              <i class="fab fa-facebook-square icon-1x"></i>
              <span class="sr-only">Facebook</span>
            </a>
            <a href="#" class="nav-link">
              <i class="fab fa-linkedin icon-1x"></i>
              <span class="sr-only">Linkedin</span>
            </a>
            <a href="#" class="nav-link">
              <i class="fab fa-google-plus-square icon-1x"></i>
              <span class="sr-only">Google plus</span>
            </a>
          </div>
        </div>
      </div>
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
              <a
                href="#"
                title="Click me you'll get a surprise"
                class="btn btn-icon btn-link header-btn float-right order-last"
                data-toggle="off-canvas"
                data-target="#offcanvas-sidebar"
                data-settings='{"cloneTarget":false}'
              >
                <i class="ion-android-more-vertical"></i>
              </a>
            </div>

            <div class="navbar navbar-expand-md navbar-static-top">
              <!--everything within this div is collapsed on mobile-->
              <div class="navbar-main collapse">
                <!--main navigation-->
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                  <!-- Pages -->
                  <li class="nav-item dropdown">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="!isLoggedIn()">
                    <router-link to="/signup">Signup</router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="!isLoggedIn()">
                    <router-link to="/login">Login</router-link>
                  </li>
                  <li class="nav-item dropdown" v-if="isLoggedIn()">
                    <router-link to="/logout">Logout</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link :to="`/users/${getUserId()}/edit`">Edit Profile</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link to="/api_dogs">Dog Matches</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link to="/favorites">Favorites</router-link>
                  </li>
                </ul>
              </div>
              <!--/.navbar-collapse -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!isLoggedIn()">
          <router-link to="/signup">Signup</router-link>
        </li>
        <li v-if="!isLoggedIn()">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="isLoggedIn()">
          <router-link to="/logout">Logout</router-link>
        </li>
        <li>
          <router-link :to="`/users/${getUserId()}/edit`">Edit Profile</router-link>
        </li>
        <li>
          <router-link to="/api_dogs">Dog Matches</router-link>
        </li>
        <li>
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
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
