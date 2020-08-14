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
        <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <nuxt-link :to="'/' +data[0].category.slug + '/'+ data[0].slug">
                <b-card-img-lazy
                  :src="`${$axios.defaults.baseURL}` + data[0].cover"
                  :alt="data[0].tags[0]"
                ></b-card-img-lazy>
              </nuxt-link>

              <br />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[0].title }}</b-card-text>
                <b-button
                  :to="data[0].category.slug + '/'+ data[0].slug"
                  variant="outline-secondary"
                  style="margin-left:1rem;"
                >Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <nuxt-link :to="'/' +data[1].category.slug + '/'+ data[1].slug">
                <b-card-img-lazy
                  :src="`${$axios.defaults.baseURL}` + data[1].cover"
                  :alt="data[1].tags[0]"
                ></b-card-img-lazy>
              </nuxt-link>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[1].title }}</b-card-text>
                <b-button
                  :to="data[1].category.slug + '/'+ data[1].slug"
                  variant="outline-secondary"
                  style="margin-left:1rem;"
                >Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <br />
      <b-card-group deck>
        <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <nuxt-link :to="'/' +data[2].category.slug + '/'+ data[2].slug">
                <b-card-img-lazy
                  :src="`${$axios.defaults.baseURL}` + data[2].cover"
                  :alt="data[2].tags[0]"
                ></b-card-img-lazy>
              </nuxt-link>

              <br />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[2].title }}</b-card-text>
                <b-button
                  :to="'/' +data[2].category.slug + '/'+ data[2].slug"
                  variant="outline-secondary"
                  style="margin-left:1rem;"
                >Read More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
          <b-row no-gutters>
            <b-col md="6">
              <nuxt-link :to="'/' +data[1].category.slug + '/'+ data[1].slug">
                <b-card-img-lazy
                  :src="`${$axios.defaults.baseURL}` + data[1].cover"
                  :alt="data[1].tags[0]"
                ></b-card-img-lazy>
              </nuxt-link>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-text class="ml-2">{{ data[1].title }}</b-card-text>
                <b-button
                  :to="'/' +data[1].category.slug + '/'+ data[1].slug"
                  variant="outline-secondary"
                  style="margin-left:1rem;"
                >Read More</b-button>
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

export default {
  components: {
    PoliticsList,
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
        console.log("==><-====", this.data);
        if (this.data.length > 2) {
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


