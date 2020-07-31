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
        <b-button type="button" size="lg" pill class="btn-1 btn-danger">Support</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-lg-8">
        <LatestNews />
      </div>
      <div class="col-md-4 col-lg-4 text-center" v-if="show1">
        <h3>
          <span>Latest News</span>
        </h3>
        <hr />
        <ul class="list-unstyled">
          <li v-for="x in getData" class="mb-2">
            <b-card>
              <b-card-text>
                <b-card-img-lazy
                  thumbnail
                  left
                  style="width:90px; height: 70px;"
                  :src="`${$axios.defaults.baseURL}` + x.cover"
                  :alt="x.tags[1]"
                />
                <span>{{ x.title | truncate(70) }}</span>
              </b-card-text>
            </b-card>
          </li>
        </ul>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-12 text-center" v-else>
        <h3>Latest News</h3>
        <ListSkeleton />
      </div>
    </div>

    <TrendingNews />

    <Politics />
  </div>
</template>

<script>
import Coronavirus from "~/components/coronavirus.vue";
import LatestNews from "~/components/home/carousel.vue";
import ListSkeleton from "~/components/skeletons/_listSkel.vue";
import TrendingNews from "~/components/home/trending.vue";
import Politics from "~/components/home/politics.vue";

export default {
  components: {
    Coronavirus,
    LatestNews,
    ListSkeleton,
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
