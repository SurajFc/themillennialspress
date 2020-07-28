<template>
  <div>
    <div v-if="show">
      <b-carousel
        id="carousel-fade"
        fade
        :interval="6000"
        style="text-shadow: 1px 1px 2px #333;"
        indicators
      >
        <b-carousel-slide v-for="x in mydata" :key="x.id">
          <b class="text-uppercase">
            {{ x.category["name"] }} /
            <span>{{ $moment(x.realease).format("ll") }}</span>
          </b>
          <h4>
            <b class="sub text-capitalize">{{ x.title | truncate(100) }}</b>
          </h4>
          <p class="sub text-capitalize">
            {{ x.subtitle | truncate(60) }}
            <span align="right" class="ml-4">
              <ShareNetwork
                network="facebook"
                :url="
                  'https://themillennialspress.com/' +
                    x.category['name'] +
                    '/' +
                    x.slug
                "
                :title="x.title"
                :description="x.subtitle"
                quote="The Millennials Press"
                :hashtags="x.tags.join(',')"
              >
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  style="color:#3B5998;"
                  class="icons__btn"
                />
              </ShareNetwork>
              <ShareNetwork
                network="reddit"
                :url="
                  'https://themillennialspress.com/' +
                    x.category['name'] +
                    '/' +
                    x.slug
                "
                :title="x.title"
              >
                <font-awesome-icon
                  :icon="['fab', 'reddit']"
                  style="color:#FF4500 "
                  class="icons__btn"
                />
              </ShareNetwork>

              <ShareNetwork
                network="twitter"
                :url="
                  'https://themillennialspress.com/' +
                    x.category['name'] +
                    '/' +
                    x.slug
                "
                :title="x.title"
                twitter-user="themillennialspress"
                quote="The Millennials Press"
                :hashtags="x.tags.join(',')"
              >
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  style="color: #1da1f2;"
                  class="icons__btn"
                />
              </ShareNetwork>
            </span>
          </p>

          <template v-slot:img>
            <b-img-lazy
              fluid-grow
              class="d-block img-fluid w-100"
              style="width:100%; height: 450px;"
              :src="`${$axios.defaults.baseURL}` + x.cover"
              :alt="x.tags[1]"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div v-else>
      <content-loader></content-loader>
      <content-loader></content-loader>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    mydata() {
      return this.$store.state.latestnews.latest;
    },
  },

  filters: {
    /**
     * Filter to truncate string, accepts a length parameter
     */
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + "....." : value;
    },
  },
  async fetch() {
    await this.$store.dispatch("latestnews/getLatestNews");
  },
  mounted() {
    this.show = true;
  },
};
</script>
<style scoped>
img {
  filter: grayscale(35%);
}

img:hover {
  filter: none;
}

.icons__btn {
  font-size: 2rem;
}
</style>
