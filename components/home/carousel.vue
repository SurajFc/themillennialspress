<template>
  <div class="row">
    <div class="col-md-8 col-lg-8 col-sm-12 mb-4" v-if="show">
      <b-carousel
        id="carousel-fade"
        fade
        :interval="6000"
        style="text-shadow: 1px 1px 2px #333;"
        indicators
      >
        <b-carousel-slide v-for="x in data" :key="x.id">
          <b class="text-uppercase">
            {{ x.category["name"] }} /
            <span>{{ $moment(x.realease).format("ll") }}</span>
          </b>
          <h4>
            <b class="sub text-capitalize">{{ x.title | truncate(100) }}</b>
          </h4>
          <p class="sub text-capitalize">{{ x.subtitle | truncate(60) }}</p>

          <template v-slot:img>
            <nuxt-link :to="x.category.slug + '/'+ x.slug" exact>
              <b-img-lazy
                fluid-grow
                class="d-block img-fluid w-100"
                style="width:100%; height: 450px;"
                :src="`${$axios.defaults.baseURL}` + x.cover"
                :alt="x.tags[1]"
              />
            </nuxt-link>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="col-sm-10 col-md-8" v-else>
      <content-loader></content-loader>
      <content-loader></content-loader>
    </div>

    <Latest :show="show" :getData="data" />
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
import Latest from "~/components/partials/_latest.vue";

export default {
  components: {
    ContentLoader,
    Latest,
  },
  data() {
    return {
      show: false,
      data: [],
    };
  },
  methods: {
    async getLatest() {
      try {
        const res = await this.$axios.$get("news/getLatestnews");
        this.data = res;
        this.show = true;
      } catch (err) {}
    },
  },

  mounted() {
    this.getLatest();
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
</style>
