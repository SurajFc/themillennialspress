<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 mt-2 d-none d-lg-block mr-3">
        <h3>{{ $moment().format("dddd") }}</h3>
        <p>
          {{ $moment().format("LLL") }}
          <br />
          <span>GMT{{ $moment().format("Z") }}</span>
        </p>
      </div>
      <div class="col-lg-1 d-none d-lg-block">
        <b-img src="corona.webp" height="100"></b-img>
      </div>
      <Coronavirus />
      <div class="col-lg-2 offset-1">
        <b-button type="button" size="lg" pill to="/donate" exact class="btn-1 btn-danger">Support</b-button>
      </div>
    </div>

    <LatestNews />

    <TrendingNews />

    <Politics />
  </div>
</template>

<script>
import Coronavirus from "~/components/coronavirus.vue";
import LatestNews from "~/components/home/carousel.vue";
import TrendingNews from "~/components/home/trending.vue";
import Politics from "~/components/home/politics.vue";

export default {
  components: {
    Coronavirus,
    LatestNews,

    TrendingNews,
    Politics,
  },
  data() {
    return {
      show1: false,
    };
  },
  computed: {
    getData() {
      return this.$store.state.latestnews.latest;
    },
  },
  mounted() {
    this.show1 = true;
  },
};
</script>
<style scoped>
.btn-1 {
  color: hsl(0, 0%, 100%) !important;
  background-color: #fb5000;
  border-color: #fb5000;
  box-shadow: azure;
  /* box-shadow: none; */
}
</style>
