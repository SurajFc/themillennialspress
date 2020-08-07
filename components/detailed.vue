<template>
  <div>
    <div class="p-3" v-if="show">
      <div class="mr-3">
        <b-img-lazy
          :src="`${$axios.defaults.baseURL}` + data[0].cover"
          :alt="data[0].tags[1]"
          fluid
          style="width:100%;height:25rem;"
        />
        <SocialButton :x="data[0]" />

        <p class="h3">{{data[0].title | truncate(80)}}</p>
      </div>
      <div class="col-lg-9 col-sm-12 col-md-12">
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
import SocialButton from "~/components/partials/socialshare.vue";
export default {
  props: ["data", "show"],
  components: {
    DetailSkel,
    SocialButton,
  },
};
</script>


