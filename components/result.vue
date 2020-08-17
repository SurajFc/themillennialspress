<template>
  <div>
    <div v-if="show">
      <div v-if="data.length ==0" class="text-center">
        <h4>No Results</h4>
      </div>
      <div v-else>
        <div class="col-sm-12 col-md-9 col-lg-9">
          <br />
          <ul v-for="x in data" :key="x.id" class="mt-3 p-2">
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
    </div>
    <div v-else>
      <ListSkel />
    </div>
  </div>
</template>

<script>
import ListSkel from "~/components/skeletons/_listSkel.vue";
export default {
  props: ["show", "data"],
  components: {
    ListSkel,
  },
};
</script>

