<template>
  <div class="dogs-index">
    <div id="content">
      <div class="container">
        <h2 class="title-divider">
          <span>
            Your
            <span class="font-weight-normal text-muted">Matches</span>
          </span>
          <small>Aren't we cute?</small>
        </h2>
        <div class="form-group row mb-2">
          <label for="ageFilter" class="col-md-4 col-form-label">Filter by age</label>
          <div class="col-md-4 col-8 mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="baby, young, adult or senior"
              v-model="ageFilter"
              list="ages"
            />
          </div>
        </div>

        <div class="row">
          <!--Blog Grid -->
          <div class="col-md-auto">
            <div
              class="blog-roll blog-grid"
              data-toggle="isotope-grid"
              data-isotope-options='{"itemSelector": ".grid-item"}'
            >
              <div class="row">
                <!--Timeline item 1-->
                <div
                  class="col-sm-6 col-md-4 grid-item"
                  v-for="api_dog in filterBy(api_dogs, ageFilter, 'age')"
                  v-bind:key="api_dog.id"
                >
                  <div class="blog-post" v-if="api_dog.primary_photo_cropped !== null">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <router-link :to="`/api_dogs/${api_dog.id}`">
                          <img :src="api_dog.primary_photo_cropped.small" />
                        </router-link>
                      </a>
                    </div>
                    <div class="mt-4">
                      <h4 class="timeline-item-title">
                        <a href="#">{{ api_dog.name }}</a>
                      </h4>

                      <h4 class="timeline-item-description">Age: {{ api_dog.age }}</h4>

                      <h4 class="timeline-item-description">Primary Breed: {{ api_dog.breeds.primary }}</h4>
                      <h4 class="timeline-item-description" v-if="api_dog.breeds.secondary !== null">
                        Secondary Breed: {{ api_dog.breeds.secondary }}
                      </h4>
                      <h4 class="timeline-item-description">
                        Location: {{ api_dog.contact.address.city }}, {{ api_dog.contact.address.state }}
                      </h4>
                      <router-link class="btn btn-link" :to="`/api_dogs/${api_dog.id}`">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </router-link>
                    </div>
                  </div>
                </div>

                <h1>Your Matches</h1>
                <div v-for="api_dog in filterBy(api_dogs, ageFilter, 'age')" v-bind:key="api_dog.id">
                  <div v-if="api_dog.primary_photo_cropped !== null">
                    <h2>Name: {{ api_dog.name }}</h2>
                    <h4>Age: {{ api_dog.age }}</h4>
                    <h4>Primary Breed: {{ api_dog.breeds.primary }}</h4>
                    <h4 v-if="api_dog.breeds.secondary !== null">Secondary Breed: {{ api_dog.breeds.secondary }}</h4>
                    <h4>Location: {{ api_dog.contact.address.city }}, {{ api_dog.contact.address.state }}</h4>
                    <router-link :to="`/api_dogs/${api_dog.id}`">
                      <img :src="api_dog.primary_photo_cropped.small" />
                    </router-link>
                  </div>
                </div>

                <!--Timeline item 2-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/butterfly.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">30</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">general</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Inhibeo Iriure Lucidus Nobis Singularis</a>
                      </h4>
                      <p class="timeline-item-description">
                        Euismod genitus molior nibh nobis sit ut. Brevitas exerci gemino interdico nisl nunc quadrum
                        vindico voco.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 3-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/water-pump.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">29</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">design</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Commoveo Jugis Pneum Quis Rusticus</a>
                      </h4>
                      <p class="timeline-item-description">
                        Aliquip defui esca quis tation vindico. Abbas conventio ea gemino imputo quis tum verto.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 4-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <div class="slider-wrapper">
                        <div class="flexslider slider-mini-nav" data-slidernav="auto" data-transition="fade">
                          <div class="slides">
                            <div class="slide">
                              <img
                                src="assets/img/blog/bee.jpg"
                                alt="Picture of frog by Ben Fredericson"
                                class="img-fluid"
                              />
                            </div>
                            <div class="slide">
                              <img
                                src="assets/img/blog/ape.jpg"
                                alt="Picture of frog by Ben Fredericson"
                                class="img-fluid"
                              />
                            </div>
                            <div class="slide">
                              <img
                                src="assets/img/blog/butterfly.jpg"
                                alt="Picture of frog by Ben Fredericson"
                                class="img-fluid"
                              />
                            </div>
                            <div class="slide">
                              <img
                                src="assets/img/blog/frog.jpg"
                                alt="Picture of frog by Ben Fredericson"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">28</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">weather</a>
                        /
                        <a href="#" class="type">slideshow</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Brevitas Camur Duis Enim Neo</a>
                      </h4>
                      <p class="timeline-item-description">
                        Gemino modo nunc te usitas ut vero vulpes. Augue jus ulciscor.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 5-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/ladybird.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">26</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">general</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Consequat Hendrerit Immitto Nimis Paulatim</a>
                      </h4>
                      <p class="timeline-item-description">
                        Appellatio dolor ea modo premo. Caecus elit jugis luptatum magna nutus olim vicis.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 7-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/butterfly.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">24</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">general</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Acsi Gemino Persto Praesent Quidem</a>
                      </h4>
                      <p class="timeline-item-description">
                        Aliquip nibh sed vero. Camur interdico oppeto praemitto. Comis esse inhibeo nunc pneum utrum
                        uxor.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 8-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameborder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113479203&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true"
                      ></iframe>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">23</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">jobs</a>
                        /
                        <a href="#" class="type">audio</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Aptent Iusto Ludus Nutus Validus</a>
                      </h4>
                      <p class="timeline-item-description">
                        Duis ille inhibeo jus pertineo veniam. Augue tincidunt ulciscor vereor.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 9-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img src="assets/img/blog/fly.jpg" alt="Picture of frog by Ben Fredericson" class="img-fluid" />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">21</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">health</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Blandit Eligo Os Secundum Vindico</a>
                      </h4>
                      <p class="timeline-item-description">
                        Iusto jus neque pecus velit zelus. At blandit decet illum vel.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 10-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/frog.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">20</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">design</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Erat Iusto Nimis Saluto Volutpat</a>
                      </h4>
                      <p class="timeline-item-description">
                        Abbas ad cui ea esca ille. Pala quidem similis. Abigo defui diam erat gilvus premo tation
                        vulputate.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 11-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img
                          src="assets/img/blog/butterfly.jpg"
                          alt="Picture of frog by Ben Fredericson"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">19</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">culture</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Caecus Humo Quis Sit Volutpat</a>
                      </h4>
                      <p class="timeline-item-description">
                        Consequat importunus scisco. Dignissim distineo enim jugis nunc praesent sed vulpes.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->

                <!--Timeline item 12-->
                <!-- <div class="col-sm-6 col-md-4 grid-item">
                  <div class="blog-post">
                    <div class="blog-media">
                      <a
                        href="blog-post<?php echo OUTPUT_FILE_TYPE; ?>
                        "
                      >
                        <img src="assets/img/blog/bee.jpg" alt="Picture of frog by Ben Fredericson" class="img-fluid" />
                      </a>
                    </div>
                    <div class="mt-4">
                      <div class="date-wrapper date-wrapper-horizontal">
                        <span class="date-m bg-primary">May</span>
                        <span class="date-d">17</span>
                      </div>
                      <div class="tags">
                        <a href="#" class="text-primary">coding</a>
                        /
                        <a href="#" class="type">image</a>
                      </div>
                      <h4 class="timeline-item-title">
                        <a href="#">Commoveo Iaceo Nimis Paulatim Sagaciter</a>
                      </h4>
                      <p class="timeline-item-description">
                        Abbas paulatim torqueo. Consequat duis gemino lenis odio pecus utinam.
                      </p>
                      <a href="blog-post.html" class="btn btn-link">
                        <i class="fa fa-arrow-circle-right"></i>
                        Read more
                      </a>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>

            <div class="pagination d-block">
              <button type="button" class="btn btn-secondary btn-lg btn-block">Load More</button>
            </div>
          </div>
        </div>
      </div>
      <!--.container-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      ageFilter: "",
      api_dogs: [
        {
          name: "",
          age: "",
          attributes: {
            house_trained: "",
            shots_current: "",
            spayed_neutered: "",
            special_needs: "",
          },
          id: "",
          breeds: {
            primary: "",
            secondary: "",
          },
          contact: {
            address: {
              address1: "",
              address2: "",
              city: "",
              state: "",
              postcode: "",
            },
            email: "",
            phone: "",
          },
          description: "",
          distance: "",
          environment: {
            cats: "",
            dogs: "",
            children: "",
          },
          gender: "",
          organization_id: "",
          photos: [
            {
              full: "",
              large: "",
              medium: "",
              small: "",
            },
          ],
          primary_photo_cropped: {
            full: "",
            large: "",
            medium: "",
            small: "",
          },
          size: "",
          url: "",
        },
      ],
    };
  },
  created: function () {
    axios.get("/api_dogs").then((response) => {
      console.log(response.data);
      this.api_dogs = response.data;
    });
  },
  methods: {},
};
</script>
