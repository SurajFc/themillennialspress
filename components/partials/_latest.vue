<template>
  <div>
    <div v-if="show" class="shadow-md p-3 mb-3 bg-white rounded">
      <h3>
        <b>Latest News</b>
      </h3>
      <hr />
      <ul class="list-unstyled">
        <li v-for="x in getData">
          <b-card no-body class="overflow-hidden" style=" border:none;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img-lazy
                  left
                  style="width:85%; "
                  :src="`${$axios.defaults.baseURL}` + x.cover"
                  :alt="x.tags[0]"
                />
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <b-card-text>
                    <h5>{{x.title | truncate(55)}}</h5>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </li>
      </ul>
    </div>
    <div v-else>
      <h3>
        <b>Latest News</b>
      </h3>
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

