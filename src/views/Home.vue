<template>
  <div class="home">
    <!-- ======== @Region: #highlighted ======== -->
    <div id="highlighted">
      <!-- Image Banner: Use the the data-bg-img functionality to create a simple image banner Use spacer classes to make the banner larger with padding, allows for easy responsive changes too see: elements-ctas.htm To make the banner full height add the attributes: data-toggle="full-height" data-offset="#header" -->
      <div
        class="bg-white overlay overlay-op-6 text-center px-6 py-6 flex-valign"
        data-bg-img="assets/img/backgrounds/photo-1513013156887-d2bf241c8c82.jpeg"
        data-css='{"background-position": "center bottom"}'
        data-toggle="full-height"
      >
        <h2 class="display-4 text-white">
          Find your perfect companion on
          <span class="font-weight-bold">TN Dog.</span>
        </h2>
        <h3 class="text-grey font-weight-normal">Southeast Tennessee's Dog Rescue App</h3>
        <hr class="hr-primary hr-lg w-20 mx-auto my-4" />
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-3">
              <router-link to="/signup" class="mb-1 btn btn-xlg btn-primary btn-rounded">Sign Up</router-link>
            </div>
            <div class="col-3">
              <router-link to="/login" class="mb-1 btn btn-xlg btn-primary btn-rounded">Login</router-link>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>
