<template>
  <div>
    <div v-if="show">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        background="#news"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        indicators
      >
        <!-- Text slides with image -->
        <b-carousel-slide v-for="x in mydata" :key="x.id">
          <b class="text-uppercase">
            {{ x.category["name"] }} /
            <span>{{ $moment(x.realease).format("ll") }}</span>
          </b>
          <h4>
            <b class="sub text-capitalize">{{ x.title | truncate(100) }}</b>
          </h4>
          <p class="sub text-capitalize">{{ x.subtitle | truncate(60) }}</p>
          <template v-slot:img>
            <b-img-lazy
              class="d-block img-fluid w-100"
              style="width:100%; height: 400px;"
              :src="`${$axios.defaults.baseURL}` + x.cover"
              :alt="x.tags[1]"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div v-else>
      <content-loader> </content-loader>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader
  },
  data() {
    return {
      slide: 0,
      show: false
    };
  },
  computed: {
    mydata() {
      return this.$store.state.latestnews.latest;
    }
  },

  filters: {
    /**
     * Filter to truncate string, accepts a length parameter
     */
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + "....." : value;
    }
  },
  async fetch() {
    await this.$store.dispatch("latestnews/getLatestNews");
  },
  mounted() {
    this.show = true;
  }
};
</script>
<style scoped>
img {
  filter: grayscale(35%);
}

img:hover {
  filter: none;
}
</style>
