<template>
  <div>
    <div class="p-3" v-if="show">
      <div class="mr-3">
        <nuxt-link :to=" '/' + data[0].category.slug + '/'+ data[0].slug">
          <b-img-lazy
            :src="`${$axios.defaults.baseURL}` + data[0].cover"
            :alt="data[0].tags[0]"
            fluid
            style="width:100%;height:25rem;"
          />

          <p class="h3">{{data[0].title | truncate(80)}}</p>
        </nuxt-link>
      </div>
      <div class="col-lg-9 col-sm-12 col-md-12">
        <br />
        <ul v-for="x in data.slice(1,data.length)" :key="x.id" class="mt-3 p-2">
          <li>
            <b-card no-body class="overflow-hidden" style=" border:none;">
              <b-row no-gutters>
                <b-col md="4">
                  <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
                    <b-card-img-lazy
                      thumbnail
                      left
                      style="width:85%; height:10rem;"
                      :src="`${$axios.defaults.baseURL}` + x.cover"
                      :alt="x.tags[1]"
                    />
                  </nuxt-link>
                </b-col>
                <b-col md="8">
                  <b-card-body>
                    <b-card-text>
                      <h5>{{x.title | truncate(100)}}</h5>
                      <p>
                        <i>{{$moment(x.realease).format("LLL")}}(IST)</i>
                      </p>
                      <p>{{x.subtitle | truncate(100)}}</p>
                      <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
                        <p>Read More...</p>
                      </nuxt-link>
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
  props: ["data", "show"],
  components: {
    DetailSkel,
  },
};
</script>

<style  scoped>
a {
  color: black;
}
a:hover {
  color: #fe5900;
}
</style>


