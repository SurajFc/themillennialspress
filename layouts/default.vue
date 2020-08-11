<template>
  <div>
    <div class="container-fluid row">
      <div class="col-md-2 col-sm-12"></div>
      <div class="col-md-8 col-sm-12">
        <Navbar />
        <Nuxt />
      </div>

      <div class="col-md-2 col-sm-12"></div>
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
