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
        <b-img src="corona.png" height="100"></b-img>
      </div>
      <Coronavirus />
      <div class="col-lg-2 offset-1">
        <b-button type="button" size="lg" pill class="btn-1 btn-danger"
          >Support</b-button
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-lg-8">
        <LatestNews />
      </div>
      <div class="col-md-4 col-lg-4 ">
        <h3>
          <span>Latest News</span>
        </h3>
        <hr />
        <ul class="list-unstyled">
          <li v-for="x in this.$store.state.latestnews.latest">
            <b-card>
              <b-card-text>
                <b-card-img-lazy
                  thumbnail
                  left
                  style="width:90px; height: 70px;"
                  :src="`${$axios.defaults.baseURL}` + x.cover"
                  :alt="x.tags[1]"
                /><span>
                  {{ x.title | truncate(70) }}
                </span></b-card-text
              >
            </b-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Coronavirus from "~/components/coronavirus.vue";
import LatestNews from "~/components/home/carousel.vue";

export default {
  components: {
    Coronavirus,
    LatestNews
  },
  filters: {
    /**
     * Filter to truncate string, accepts a length parameter
     */
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) : value;
    }
  }
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
.line {
}
</style>
