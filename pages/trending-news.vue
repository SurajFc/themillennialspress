<template>
  <div>
    <div class="p-3" v-if="show">
      <div class="mr-3">
        <b-img-lazy
          :src="`${$axios.defaults.baseURL}` + data[0].cover"
          :alt="data[0].tags[1]"
          fluid
          style="width:100%;height:25rem;"
        ></b-img-lazy>
        <p class="h3">{{data[0].title | truncate(80)}}</p>
      </div>
      <div class="col-9">
        <br />
        <ul v-for="x in data.slice(1,data.length)" :key="x.id" class="mt-3 p-2">
          <li>
            <b-card no-body class="overflow-hidden" style=" border:none;">
              <b-row no-gutters>
                <b-col md="4">
                  <b-card-img-lazy
                    thumbnail
                    left
                    style="width:85%; height:10rem;"
                    :src="`${$axios.defaults.baseURL}` + x.cover"
                    :alt="x.tags[1]"
                  />
                </b-col>
                <b-col md="8">
                  <b-card-body>
                    <b-card-text>
                      <h5>{{x.title | truncate(100)}}</h5>
                      <p>
                        <i>{{$moment(x.realease).format("LLL")}}(IST)</i>
                      </p>
                      <p>{{x.subtitle | truncate(100)}}</p>
                      <p>Read More...</p>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </li>
          <hr />
        </ul>
      </div>
    </div>
    <div v-else>
      <DetailSkel />
    </div>
  </div>
</template>

<script>
import DetailSkel from "~/components/skeletons/detailSkel.vue";
export default {
  name: "TrendingAll",
  components: {
    DetailSkel,
  },
  data() {
    return {
      data: [],
      page: 1,
      show: false,
    };
  },
  methods: {
    async getTrendingAll() {
      try {
        const res = await this.$axios.$get(`news/trending/all?q=${this.page}`);
        this.data = res.results;
        console.log(res);
        this.show = true;
      } catch {}
    },
  },
  mounted() {
    this.getTrendingAll();
  },
};
</script>

<style>
</style>