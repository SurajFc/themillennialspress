<template>
  <div class="container-fluid row ">
    <div class="col-lg-2 col-md-12 col-xs-12  card">
      side
    </div>
    <div
      class="col-lg-8 col-md-12 col-xs-12 col-sm-12 shadow p-3 mb-5 bg-white rounded"
    >
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
