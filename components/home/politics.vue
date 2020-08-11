<template>
  <div class="row my-3">
    <div class="shadow-lg p-3 bg-white rounded" v-if="show">
      <div>
        <h3>
          <span class="font-weight-bold">Political News</span>
          <span style="float:right;">
            <b-button variant="outline-secondary" to="/political-news">SEE ALL</b-button>
          </span>
        </h3>
        <hr />
      </div>
      <b-card-group deck>
        <b-card class="overflow-hidden mycon" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img-lazy
                :src="`${$axios.defaults.baseURL}` + data[0].cover"
                :alt="data[0].tags[0]"
              ></b-card-img-lazy>
              <SocialButton :x="data[0]" />
              <br />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[0].title }}</b-card-text>
                <b-button href="#" variant="outline-secondary" style="margin-left:1rem;">Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="overflow-hidden mycon" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img-lazy
                :src="`${$axios.defaults.baseURL}` + data[1].cover"
                :alt="data[1].tags[0]"
              ></b-card-img-lazy>
              <SocialButton :x="data[1]" />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[1].title }}</b-card-text>
                <b-button href="#" variant="outline-secondary" style="margin-left:1rem;">Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <br />
      <b-card-group deck>
        <b-card class="overflow-hidden mycon" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img-lazy
                :src="`${$axios.defaults.baseURL}` + data[0].cover"
                :alt="data[0].tags[0]"
              ></b-card-img-lazy>
              <SocialButton :x="data[0]" />
              <br />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[0].title }}</b-card-text>
                <b-button href="#" variant="outline-secondary" style="margin-left:1rem;">Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="overflow-hidden mycon" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img-lazy
                :src="`${$axios.defaults.baseURL}` + data[1].cover"
                :alt="data[1].tags[0]"
              ></b-card-img-lazy>
              <SocialButton :x="data[1]" />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[1].title }}</b-card-text>
                <b-button href="#" variant="outline-secondary" style="margin-left:1rem;">Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
    <div v-else class="col-12">
      <PoliticsList />
    </div>
  </div>
</template>

<script>
import PoliticsList from "~/components/partials/_politics.vue";
import SocialButton from "~/components/partials/socialshare.vue";

export default {
  components: {
    PoliticsList,
    SocialButton,
  },
  data() {
    return {
      show: false,
      data: [],
    };
  },
  methods: {
    getPoliticalNews() {
      this.$axios.$get("news/getPoliticsNews").then((res) => {
        this.data = res;
        console.log("==>", this.data);
        if (this.data.length > 0) {
          this.show = true;
        }
      });
    },
  },
  mounted() {
    this.getPoliticalNews();
  },
};
</script>

<style scoped>
.top_left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 13%;
  left: 23%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
