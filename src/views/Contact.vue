<template>
  <div class="agency-contact">
    <div id="content">
      <div class="container">
        <div class="row">
          <!--main content-->
          <div class="col-md-9">
            <h2 class="title-divider">
              <span>
                Contact
                <span class="font-weight-normal text-muted">Rescue Agency</span>
              </span>
            </h2>
            <div class="row">
              <div class="col-md-12">
                <form id="contact-form" action="#" role="form">
                  <div class="form-group">
                    <label class="sr-only" for="contact-name">{{ userParams.name }}</label>
                    <input type="text" class="form-control" id="contact-name" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="contact-email">Email</label>
                    <input type="email" class="form-control" id="contact-email" placeholder="Email" />
                    <small id="contact-email-help" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="contact-message">Message</label>
                    <textarea rows="12" class="form-control" id="contact-message" placeholder="Message"></textarea>
                    <small id="contact-message-help" class="form-text text-muted">Your message and details.</small>
                  </div>
                  <input type="button" class="btn btn-primary" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      userParams: {},
      organization: {
        name: "",
        email: "",
        phone: "",
        address: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          postcode: "",
        },
        hours: {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        },
        website: "",
      },
    };
  },
  created: function () {
    // axios.get(`/organizations/${this.$route.params.organization_id}`).then((response) => {
    //   this.organization = response.data;
    //   console.log(this.organization);
    // });
    axios.get("/users/me").then((response) => {
      console.log(response.data);
      this.userParams = response.data;
    });
  },
  methods: {},
};
</script>
