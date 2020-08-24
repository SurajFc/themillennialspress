<template>
  <div>
    <div class="mt-3">
      <h4>
        Related Articles
        <span style="float:right;" class="mr-2">
          <b-button class="button-prev" slot="button-prev">
            <font-awesome-icon :icon="['fas', 'chevron-circle-left']" style="color:#000000;" />
          </b-button>
          <b-button class="button-next" slot="button-next">
            <font-awesome-icon :icon="['fas', 'chevron-circle-right']" style="color:#000000;" />
          </b-button>
        </span>
      </h4>
    </div>
    <div class="row p-3" v-if="show">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(x,index) in data" :key="index">
          <b-card tag="article" style="max-width: 30rem;height:15rem;" class="mb-3 mr-1 border-0">
            <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
              <b-card-img-lazy :src="`${$axios.defaults.baseURL}` + x.cover"></b-card-img-lazy>
            </nuxt-link>

            <b-card-text>
              <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
                <h6>
                  {{
                  x.title | truncate(45)
                  }}
                </h6>
              </nuxt-link>
            </b-card-text>
          </b-card>
        </swiper-slide>
      </swiper>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      data: [],
      show: false,
      swiperOption: {
        direction: "horizontal",

        keyboard: {
          enabled: true,
        },
        mousewheel: true,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },

        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    relatedArticles() {
      var fc = this.$route.path.split("/");

      this.$axios
        .get(`news/related?slug=${fc[1]}`)
        .then((res) => {
          this.data = res.data;
        })
        .finally((res) => {
          this.show = true;
        });
    },
  },
  mounted() {
    this.relatedArticles();
  },
};
</script>

<style>
</style>