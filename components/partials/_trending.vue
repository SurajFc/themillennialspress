<template>
  <div class="col-md-4 col-sm-10 ml-sm-5 ml-md-0 offset-sm-1 offset-md-0">
    <div v-if="show" class="mb-3">
      <h3>
        <b>Most Viewed</b>
      </h3>
      <hr />
      <ul class="list-unstyled">
        <li v-for="(x,index) in getData.slice(0,5)" :key="index" class="mb-1">
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
        </li>
      </ul>
    </div>
    <div v-else>
      <h3>
        <b>Most Viewed</b>
      </h3>
      <hr />
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

