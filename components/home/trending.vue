<template>
  <div class="row p-1">
    <div class="col-md-8 col-lg-8 col-sm-10 offset-sm-1 offset-md-0 mb-3 bg-white">
      <div>
        <h3>
          <span class="font-weight-bold">Trending News</span>
          <span style="float:right;">
            <b-button @click="prev()">
              <font-awesome-icon :icon="['fas', 'chevron-circle-left']" style="color:#000000;" />
            </b-button>
            <b-button @click="next()">
              <font-awesome-icon :icon="['fas', 'chevron-circle-right']" style="color:#000000;" />
            </b-button>
          </span>
        </h3>
        <hr />
      </div>
      <div class="row p-3" v-if="show">
        <b-carousel ref="trending" :interval="100000" :no-animation="true">
          <b-carousel-slide v-for="(i, index) in data" :key="index">
            <template v-slot:img>
              <b-card-group>
                <b-card tag="article" no-body style="border:none;" class="shadow-mobile ma-1">
                  <nuxt-link :to="'/' +i.category.slug + '/'+ i.slug">
                    <b-card-img-lazy
                      :src="`${$axios.defaults.baseURL}` + data[index].cover"
                      class="trending-card"
                      :alt="i.tags[0]"
                    ></b-card-img-lazy>
                  </nuxt-link>

                  <b-card-text>
                    <nuxt-link :to="'/' +i.category.slug + '/'+ i.slug">
                      <h6>
                        {{
                        data[index].title | truncate(70)
                        }}
                      </h6>
                    </nuxt-link>
                  </b-card-text>
                </b-card>
                <b-card
                  tag="article"
                  no-body
                  style="border:none;"
                  class="shadow-mobile ma-1"
                  v-if="data[index + 1]"
                >
                  <nuxt-link :to="'/' +data[index + 1].category.slug + '/'+ data[index + 1].slug">
                    <b-card-img-lazy
                      :src="`${$axios.defaults.baseURL}` + data[index + 1].cover"
                      class="trending-card"
                      :alt="data[index + 1].tags[0]"
                    ></b-card-img-lazy>
                  </nuxt-link>

                  <b-card-text>
                    <nuxt-link :to="'/' +i.category.slug + '/'+ i.slug">
                      <h6>
                        {{
                        data[index+1].title | truncate(70)
                        }}
                      </h6>
                    </nuxt-link>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div v-else>
        <content-loader></content-loader>
      </div>
    </div>

    <MostViewed />
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

import MostViewed from "~/components/partials/_mostviewed.vue";

export default {
  data() {
    return {
      show: false,
      data: [],
      cur: 0,
    };
  },
  components: {
    ContentLoader,
    MostViewed,
  },
  methods: {
    prev() {
      if (this.cur > 0 && this.cur <= Math.floor(this.data.length / 2)) {
        this.$refs.trending.setSlide(this.cur - 1);
        this.cur = this.cur - 1;
      } else {
        this.$refs.trending.setSlide(Math.floor(this.data.length / 2));
        this.cur = Math.floor(this.data.length / 2);
      }
    },
    next() {
      if (this.cur >= 0 && this.cur < Math.floor(this.data.length / 2)) {
        this.$refs.trending.setSlide(this.cur + 1);
        this.cur += 1;
      } else {
        this.$refs.trending.setSlide(0);
        this.cur = 0;
      }
    },
    getLatestNews() {
      this.$axios
        .$get("news/getTrendingNews")
        .then((res) => {
          this.data = res;
          this.show = true;
        })
        .catch((e) => {});
    },
  },
  mounted() {
    this.getLatestNews();
  },
};
</script>

<style scoped>
/* .card-img,
.card-img-bottom {
  height: 14vw;
  width: 100%;
}

.top_left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 17%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
} */
</style>
