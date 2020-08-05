<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h6 class="footer-title">Follow Us On</h6>

          <div class="fotter-social-links">
            <ul>
              <li>
                <a href="#" class="facebook">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
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
                <strong>Email :</strong> info@millenials.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h6 class="footer-title">Recent News</h6>

          <!-- Start Item Post1-->
          <div class="single-item">
            <div class="single_post widgets_small">
              <div class="post_img">
                <div class="img_wrap">
                  <a href="#">
                    <img src="images/sports2.jpg" alt />
                  </a>
                </div>
              </div>
              <div class="single_post_text">
                <h4>
                  <a href="#">Copa America: Luis Suarez from devastated US</a>
                </h4>
                <span class="date">March 26, 2020</span>
              </div>
            </div>
            <div class="space-15"></div>
            <div class="border_black"></div>
            <div class="space-15"></div>
          </div>
          <!-- End post1 -->

          <!-- Start Item Post1-->
          <div class="single-item">
            <div class="single_post widgets_small">
              <div class="post_img">
                <div class="img_wrap">
                  <a href="#">
                    <img src="images/sports3.jpg" alt />
                  </a>
                </div>
              </div>
              <div class="single_post_text">
                <h4>
                  <a href="#">Copa America: Luis Suarez from devastated US</a>
                </h4>
                <span class="date">March 26, 2020</span>
              </div>
            </div>
            <div class="space-15"></div>
            <div class="border_black"></div>
            <div class="space-15"></div>
          </div>
          <!-- End post1 -->

          <!-- Start Item Post1-->
          <div class="single-item">
            <div class="single_post widgets_small">
              <div class="post_img">
                <div class="img_wrap">
                  <a href="#">
                    <img src="images/sports4.jpg" alt />
                  </a>
                </div>
              </div>
              <div class="single_post_text">
                <h4>
                  <a href="#">Copa America: Luis Suarez from devastated US</a>
                </h4>
                <span class="date">March 26, 2020</span>
              </div>
            </div>
          </div>
          <!-- End post1 -->
        </div>

        <div class="col-md-4">
          <h6 class="footer-title">Newsletter</h6>

          <div class="newsletter-form-area">
            <form action="#">
              <input type="email" placeholder="Your email address..." />
              <button type="submit">
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </form>

            <p>Sign up to hear and get our daily update via email</p>
          </div>

          <h6 class="footer-title2">Instagram Gallery</h6>

          <div class="instagram-grid">
            <div class="gallery-img">
              <img src="images/sports4.jpg" class="w-100" alt />
            </div>
            <div class="gallery-img">
              <img src="images/sports2.jpg" class="w-100" alt />
            </div>
            <div class="gallery-img">
              <img src="images/sports3.jpg" class="w-100" alt />
            </div>
            <div class="gallery-img">
              <img src="images/sports2.jpg" class="w-100" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- Row End -->

      <!-- Copyright -->
      <div class="copy-bg text-center">
        <p>
          Copyright © 2020. All rights reserved by
          The Millennials
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
</style>