<template>
  <div class="container-fluid row ">
    <div class="col-lg-2 col-md-12 col-xs-12  card">
      side
    </div>
    <div class="col-lg-8 col-md-12 col-xs-12 col-sm-12">
      <Navbar />
      <Nuxt />
    </div>

    <div class="col-lg-2 col-md-12 col-xs-12 card">
      side
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
