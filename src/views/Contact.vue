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
                <span class="font-weight-normal text-muted">Us</span>
              </span>
              <small>Ways To Get In Touch</small>
            </h2>
            <div class="row">
              <div class="col-md-12">
                <form id="contact-form" action="#" role="form">
                  <div class="form-group">
                    <label class="sr-only" for="contact-name">Name</label>
                    <input type="text" class="form-control" id="contact-name" placeholder="Name" />
                    <small id="contact-name-help" class="form-text text-muted">First and last names.</small>
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
