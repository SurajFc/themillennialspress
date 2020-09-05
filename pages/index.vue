<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 mt-2 d-none d-md-block">
        <h3>{{ $moment().format("dddd") }}</h3>
        <p>{{ $moment().format("LL") }}</p>
        <span>GMT{{ $moment().format("Z") }}</span>
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
          class="btn-1 btn-danger button float-md-right d-flex justify-content-center"
        >
          <span>Support</span>
        </b-button>
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
.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 23px;
  padding: 10px 25px 10px 25px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: " \00bb\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
