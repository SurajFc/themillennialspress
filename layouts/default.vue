<template>
  <div>
    <div class="container-fluid row">
      <div class="col-lg-2 col-md-12 col-xs-12 card"></div>
      <div class="col-lg-8 col-md-12 col-xs-12 col-sm-12">
        <Navbar />
        <Nuxt />
      </div>

      <div class="col-lg-2 col-md-12 col-xs-12 card"></div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
