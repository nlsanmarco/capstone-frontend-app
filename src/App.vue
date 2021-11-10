<template>
  <div id="app">
    <!-- ======== @Region: #header ======== -->
    <div id="header">
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
              <a class="header-brand-text" title="Home">
                <h1 class="h2">
                  <span class="header-brand-text-alt">TN</span>
                  Dog
                  <span class="header-brand-text-alt">.</span>
                </h1>
              </a>
              <div class="header-divider d-none d-lg-block"></div>
              <div class="header-slogan d-none d-lg-block">Find your rescue match!</div>
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
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right">
                  <li class="nav-link">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-link" v-if="!isLoggedIn()">
                    <router-link to="/signup">Signup</router-link>
                  </li>
                  <li class="nav-link" v-if="!isLoggedIn()">
                    <router-link to="/login">Login</router-link>
                  </li>
                  <li class="nav-link" v-if="isLoggedIn()">
                    <router-link to="/logout">Logout</router-link>
                  </li>
                  <li class="nav-link" v-if="isLoggedIn()">
                    <router-link :to="`/users/${getUserId()}/edit`">Edit Profile</router-link>
                  </li>
                  <li class="nav-link" v-if="isLoggedIn()">
                    <router-link to="/api_dogs">Dog Matches</router-link>
                  </li>
                  <li class="nav-link" v-if="isLoggedIn()">
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
    <router-view />

    <!-- ======== @Region: #content-below ======== -->
    <div id="content-below">
      <!-- Awesome features call to action -->
      <div class="bg-white bg-op-9 text-white py-4">
        <div class="container">
          <div class="row text-center text-lg-left align-items-lg-center">
            <div class="col-12 col-lg-7 text-white">
              <h3 class="font-weight-bold my-0 text-uppercase">Awesome Features</h3>
              <p class="font-weight-normal op-9 my-0">
                <i class="ion-android-checkmark-circle"></i>
                99.9% Uptime
                <i class="ion-android-checkmark-circle ml-lg-3"></i>
                Free Upgrades
                <i class="ion-android-checkmark-circle ml-lg-3"></i>
                Fully Responsive
                <i class="ion-android-checkmark-circle ml-lg-3"></i>
                Bug Free
              </p>
            </div>
            <div class="col-12 col-lg-5 py-2 text-lg-right">
              <a
                href="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme"
                class="btn btn-xlg btn-white btn-rounded shadow-lg bg-light bg-op-8 bg-hover-white"
              >
                Get AppStrap
                <i class="fa fa-arrow-right ml-2 mt-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ======== @Region: #footer ======== -->
    <footer id="footer" class="p-0">
      <div class="container pt-6 pb-5">
        <div class="row">
          <div class="col-md-4">
            <!--@todo: replace with company contact details-->
            <h4 class="text-uppercase text-white"></h4>
            <address>
              <ul class="list-unstyled">
                <li>
                  <abbr title="Phone"><i class="fa fa-phone fa-fw"></i></abbr>
                </li>
                <li>
                  <abbr title="Email"><i class="fa fa-envelope fa-fw"></i></abbr>
                </li>
                <li>
                  <abbr title="Address"><i class="fa fa-home fa-fw"></i></abbr>
                </li>
              </ul>
            </address>
          </div>

          <div class="col-md-4">
            <h4 class="text-uppercase text-white"></h4>
            <p></p>
          </div>

          <div class="col-md-4">
            <h4 class="text-uppercase text-white"></h4>
            <p></p>
            <!--@todo: replace with mailchimp code-->
            <form>
              <div class="input-group">
                <label class="sr-only" for="email-field"></label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr class="my-0 hr-blank op-2" />
      <!--@todo: replace with company copyright details-->
      <div class="bg-inverse-dark text-sm py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="mb-0"></p>
            </div>
            <div class="col-md-6">
              <ul class="list-inline footer-links float-md-right mb-0"></ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
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
