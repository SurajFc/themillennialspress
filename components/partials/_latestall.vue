<template>
  <div>
    <h3>
      <b>Latest News</b>
    </h3>
    <hr />
    <div v-if="show" class="mb-2">
      <ul class="list-unstyled">
        <li v-for="(x,index) in getData" :key="index">
          <b-card no-body style="border:none;" class="shadow-mobile ma-1">
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
                    <p class="ml-2 mt-2">{{x.title | truncate(60)}}</p>
                  </nuxt-link>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </li>
      </ul>
      <nuxt-link to="/latest-news">
        <p class="float-right h6">Read all the latest news...</p>
      </nuxt-link>
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

