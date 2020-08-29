<template>
  <div class="col-md-4 col-sm-12 ml-md-0 offset-md-0">
    <h3>
      <b>Most Viewed</b>
    </h3>
    <hr />
    <div v-if="show" class="mb-2">
      <ul class="list-unstyled">
        <li v-for="(x,index) in data" :key="index">
          <b-card no-body style="border:none;" class="shadow-mobile mb-2">
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
                    <p class="ml-2 mt-2">{{x.title | truncate(65)}}</p>
                  </nuxt-link>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
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
  components: {
    ListSkeleton,
  },
  data() {
    return {
      show: false,
      data: [],
    };
  },
  methods: {
    getMostViewed() {
      this.$axios.get("news/mostviewed").then((res) => {
        this.data = res.data;
        this.show = true;
      });
    },
  },
  mounted() {
    this.getMostViewed();
  },
};
</script>

