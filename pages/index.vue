<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 mt-2 d-none d-md-block">
        <h3>{{ $moment().format("dddd") }}</h3>
        <p>
          {{ $moment().format("LLL") }}
          <br />
          <span>GMT{{ $moment().format("Z") }}</span>
        </p>
      </div>
      <!-- <div class="col-md-1 d-none d-lg-block ml-md-4">
        <b-img src="corona.webp" height="100"></b-img>
      </div>-->
      <Coronavirus />
      <div class="col-md-2 col-lg-2 offset-md-1 mb-4">
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
    <Editorial />
    <!-- <Youtube /> -->
    <Politics />
  </div>
</template>

<script>
import Coronavirus from "~/components/coronavirus.vue";
import LatestNews from "~/components/home/carousel.vue";
import TrendingNews from "~/components/home/trending.vue";
import Politics from "~/components/home/politics.vue";
// import Youtube from "~/components/home/videos.vue";
import Editorial from "~/components/home/editorial.vue";
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

        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://themillennialspress.com/_nuxt/img/tmp2.9d19128.webp",
        },

        {
          hid: "og:title",
          property: "og:title",
          content:
            "The Millennials Press - Millennials millenials millennialspress themillennialspress.com millennials.com themillennials.com www.themillennialspress.com ",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "The Millennials Press - The Millennials, exploring the world of the largest living generation. We have made this website to change the way of journalism so that you all can trust us. This is just an idea to show the whole new side of our country news, and to give you a piece of our country news. We want to give you an unbiased review and impression. We believe in facts, unbiased opinions, and truth. ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "websites",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "millennials, Millennials, themillennials, millennials news, Millennials press ,the millennials, milenials, themillennialspress.com ",
        },
      ],
    };
  },
  components: {
    Coronavirus,
    LatestNews,

    TrendingNews,
    Politics,
    Editorial,
    // Youtube,
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
