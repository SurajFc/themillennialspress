<template>
  <div>
    <div class="row">
      <div class="col-md-0 col-lg-2 col-sm-0"></div>
      <div class="col-md-0 col-lg-8 col-sm-12">
        <Navbar />
        <Nuxt />
      </div>

      <div class="col-md-0 col-sm-0"></div>
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
