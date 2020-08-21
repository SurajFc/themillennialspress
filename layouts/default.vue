<template>
  <div>
    <div class="container">
      <div>
        <Navbar />
        <Nuxt />
      </div>
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
    Footer
  }
};
</script>
