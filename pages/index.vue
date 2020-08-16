<template>
  <div>
    <div class="row">
      <div class="col-md-2 mt-2 d-none d-lg-block mr-3">
        <h3>{{ $moment().format("dddd") }}</h3>
        <p>
          {{ $moment().format("LLL") }}
          <br />
          <span>GMT{{ $moment().format("Z") }}</span>
        </p>
      </div>
      <div class="col-md-1 d-none d-lg-block ml-md-4">
        <b-img src="corona.webp" height="100"></b-img>
      </div>
      <Coronavirus />
      <div class="col-md-2 offset-md-1 mb-4">
        <b-button
          type="button"
          size="lg"
          pill
          to="/donate"
          exact
          class="btn-1 btn-danger float-md-right text-center d-flex justify-content-center"
        >Support</b-button>
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
  head() {
    return {
      title: "The Millennials Press",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Home",
          name: "Home",
          content: "Home | The Millennials Press",
        },
      ],
    };
  },
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
  padding-left: 30px;
  padding-right: 30px;
  /* box-shadow: none; */
}
</style>
