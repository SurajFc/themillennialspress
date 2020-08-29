<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item to="/" tag="nuxt-link">
        <font-awesome-icon :icon="['fas', 'home']" />
        <span>Home</span>
      </b-breadcrumb-item>

      <b-breadcrumb-item exact-active-class active :to="$route.path" tag="nuxt-link">
        <span class="text-capitalize">{{$route.name.split('-')[0]}}</span>
      </b-breadcrumb-item>
    </b-breadcrumb>
    <div class="container" v-if="!data.length">
      <div v-if="show">Empty</div>
      <div v-else>
        <DetailSkel />
      </div>
    </div>
    <div v-else>
      <div class="p-3" v-if="show">
        <div class="mr-3 text-center">
          <nuxt-link :to="'/' + data[0].category.slug + '/' + data[0].slug">
            <b-img-lazy
              :src="`${$axios.defaults.baseURL}` + data[0].cover"
              :alt="data[0].tags[0]"
              fluid
            />

            <p class="h3">{{ data[0].title | truncate(70) }}</p>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-md-9">
          <br />
          <ul v-for="x in data.slice(1, data.length)" :key="x.id" class="mt-3 p-2">
            <li>
              <b-card no-body class="overflow-hidden" style=" border:none;">
                <b-row no-gutters>
                  <b-col md="4">
                    <nuxt-link :to="'/' + x.category.slug + '/' + x.slug">
                      <b-card-img-lazy
                        thumbnail
                        left
                        :src="`${$axios.defaults.baseURL}` + x.cover"
                        :alt="x.tags[1]"
                      />
                    </nuxt-link>
                  </b-col>
                  <b-col md="7" class="ml-3">
                    <b-card-body>
                      <b-card-text>
                        <h5>{{ x.title | truncate(100) }}</h5>
                        <p>
                          <i>{{ $moment(x.realease).format("LLL") }}(IST)</i>
                        </p>
                        <p>{{ x.subtitle | truncate(100) }}</p>
                        <nuxt-link :to="'/' + x.category.slug + '/' + x.slug">
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
  </div>
</template>

<script>
import DetailSkel from "~/components/skeletons/detailSkel.vue";

export default {
  props: {
    data: {
      required: true,
      default: "",
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    DetailSkel,
  },
};
</script>

<style scoped>
a {
  color: black;
}
a:hover {
  color: #fe5900;
}
.img-fluid {
  width: 100%;
  height: 30rem;
}
.breadcrumb {
  background-color: white;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
li:hover {
  transform: translateY(0px);
  transition: 0s;
}
@media (max-width: 576px) {
  .img-fluid {
    width: 100%;
    height: 18rem;
  }
}
</style>
