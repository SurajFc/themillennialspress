<template>
  <div class="row">
    <div class="col-md-8 col-lg-8">
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
      <div class="row" v-if="show">
        <b-carousel
          ref="trending"
          :interval="10000"
          style="text-shadow: 1px 1px 2px #333;"
          :no-animation="true"
        >
          <b-carousel-slide v-for="(i,index) in data" :key="index">
            <template v-slot:img>
              <b-card-group>
                <b-card tag="article" style="max-width: 30rem;" class="mb-2">
                  <b-card-img-lazy :src="`${$axios.defaults.baseURL}` + data[index].cover"></b-card-img-lazy>
                  <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                  <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>

                <b-card tag="article" style="max-width: 30rem;" class="ml-2" v-if="data[index+1]">
                  <b-card-img-lazy :src="`${$axios.defaults.baseURL}` + data[index+1].cover"></b-card-img-lazy>
                  <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                  <b-button href="#" variant="primary">Go somewhere</b-button>
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
    <div class="col-md-4 col-lg-4 col-sm-12 text-center" v-if="show">
      <h3>
        <span>Most Viewed</span>
      </h3>
      <hr />
    </div>
    <div class="col-md-4 col-lg-4 col-sm-12 text-center" v-else>
           <h3>
        <span>Most Viewed</span>
      </h3>
      <hr />
        <ListSkeleton />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
import ListSkeleton from "~/components/skeletons/_listSkel.vue";

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
    ListSkeleton
  },
  computed: {},

  methods: {
    prev() {
      console.log("here", Math.floor(this.data.length / 2));
      if (this.cur > 0 && this.cur <= Math.floor(this.data.length / 2)) {
        console.log("inside prev");
        this.$refs.trending.setSlide(this.cur - 1);
        this.cur = this.cur - 1;
        console.log(this.cur);
      } else {
        this.$refs.trending.setSlide(Math.floor(this.data.length / 2));
        this.cur = Math.floor(this.data.length / 2);
      }
    },
    next() {
      console.log("here", this.cur);
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
          console.log("====>", this.data);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally((this.show = true));
    },
  },
  mounted() {
    this.getLatestNews();
  },
};
</script>

<style scoped>
.card-img,
.card-img-bottom {
  height: 15vw;
  width: 100%;
}
</style>