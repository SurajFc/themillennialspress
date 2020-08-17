<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h6 class="footer-title">Follow Us On</h6>

          <div class="fotter-social-links">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Themillennialspress/"
                  class="facebook"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/themillennialspress/"
                  class="instagram"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/millennials_90" class="twitter" target="_blank">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
            </ul>

            <p>
              Follow us to stay in the loop on what's
              <br />new with us.
            </p>

            <div class="contact-info">
              <p>
                <strong>Phone :</strong> +91 999 999 9999
              </p>
              <p>
                <strong>Email :</strong>
                <a href="mailto:info@millennialspress.com">info@millennialspress.com</a>
              </p>
            </div>
            <div class="mt-4">
              <p>
                <nuxt-link to="/about-us" exact>About us</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/privacy-policy" exact>Privacy Policy</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/cookie-policy" exact>Cookie Policy</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/disclaimer" exact>Disclaimer</nuxt-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h6 class="footer-title">Recent News</h6>

          <div class="single-item" v-for="(x, index) in data.slice(0, 4)" :key="index">
            <div class="single_post widgets_small">
              <div class="post_img">
                <div class="img_wrap">
                  <nuxt-link :to="'/' + x.category.slug + '/'+ x.slug">
                    <b-img-lazy
                      left
                      style="width:100%; "
                      :src="`${$axios.defaults.baseURL}` + x.cover"
                      :alt="x.tags[0]"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="single_post_text">
                <h4>
                  <nuxt-link :to="'/' + x.category.slug + '/'+ x.slug">{{ x.title | truncate(50) }}</nuxt-link>
                </h4>
                <span class="date">
                  {{
                  $moment(x.realease).format("LL")
                  }}
                </span>
              </div>
            </div>
            <div class="space-15"></div>
            <div class="border_black"></div>
            <div class="space-15"></div>
          </div>
          <!-- End post1 -->
        </div>

        <div class="col-md-4">
          <h6 class="footer-title">Newsletter</h6>

          <div class="newsletter-form-area">
            <validation-observer ref="fc" v-slot="{ handleSubmit }">
              <b-form @submit.stop.prevent="handleSubmit(onsubscribe)">
                <validation-provider
                  name="Email"
                  :rules="{ required: true, email: true, max: 40 }"
                  v-slot="validationContext"
                >
                  <b-form-input
                    id="email"
                    class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
                    name="email"
                    v-model="email"
                    placeholder="your email address"
                    :state="getValidationState(validationContext)"
                    required
                  ></b-form-input>

                  <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
                <b-button type="submit" variant="outline-primary">
                  <font-awesome-icon :icon="['fas', 'paper-plane']" style="background-color:black" />
                </b-button>
              </b-form>
            </validation-observer>

            <p>Sign up to hear and get our daily update via email</p>
          </div>

          <h6 class="footer-title2">Instagram Gallery</h6>

          <div class="instagram-grid">
            <div class="gallery-img">
              <!-- <img src="images/sports4.jpg" class="w-100" alt /> -->
            </div>
            <!-- <div class="gallery-img">
              <img src="images/sports2.jpg" class="w-100" alt />
            </div>
            <div class="gallery-img">
              <img src="images/sports3.jpg" class="w-100" alt />
            </div>
            <div class="gallery-img">
              <img src="images/sports2.jpg" class="w-100" alt />
            </div>-->
          </div>
        </div>
      </div>
      <!-- Row End -->

      <!-- Copyright -->
      <div class="copy-bg mt-0 text-center">
        <p>Copyright © 2020. All rights reserved by The Millennials Press</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return { email: null, data: [] };
  },
  methods: {
    onsubscribe() {
      this.$axios
        .$post("news/newsletter", { email: this.email })
        .then((res) => {
          this.$store.dispatch("toasty/myToaster", {
            body: " Thank You..! For Subscribing",
            title: "Newsletter",
            autoHideDelay: 3000,
          });
        })
        .catch((e) => {
          this.$store.dispatch("toasty/myToaster", {
            body: " Already Subscribed",
            title: "Newsletter",
            autoHideDelay: 3000,
          });
        })
        .finally((e) => {
          (this.email = null), this.$refs.fc.reset();
        });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    // getinstafeed() {
    //   this.$axios.$get().then((res) => {
    //     console.log(res);
    //   });
    // },
    getlatest() {
      this.$axios.$get("news/getLatestnews").then((res) => {
        this.data = res;
      });
    },
  },
  mounted() {
    this.getlatest();
  },
};
</script>

<style scoped></style>
