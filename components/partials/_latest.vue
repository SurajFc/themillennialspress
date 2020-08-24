<template>
  <div class="col-md-4 col-sm-12 ml-md-0 offset-md-0">
    <h3>
      <b>Latest News</b>
    </h3>
    <hr />
    <div v-if="show">
      <ul class="list-unstyled">
        <li v-for="(x,index) in getData" :key="index">
          <b-card no-body style="border:none;">
            <b-row no-gutters>
              <b-col md="4" sm="12">
                <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
                  <b-card-img-lazy
                    left
                    class="card-news"
                    :src="`${$axios.defaults.baseURL}` + x.cover"
                    :alt="x.tags[0]"
                  />
                </nuxt-link>
              </b-col>
              <b-col md="8" sm="12">
                <b-card-body>
                  <nuxt-link :to="'/' +x.category.slug + '/'+ x.slug">
                    <p>{{x.title | truncate(65)}}</p>
                  </nuxt-link>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </li>
      </ul>
    </div>
    <div v-else>
      <ListSkeleton />
    </div>
  </div>
</template>

<script>
import ListSkeleton from "~/components/skeletons/_listSkel.vue";

export default {
  props: ["getData", "show"],
  components: {
    ListSkeleton,
  },
};
</script>

