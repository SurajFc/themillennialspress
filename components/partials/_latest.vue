<template>
  <div>
    <div v-if="show" class="shadow-md p-3 mb-3 bg-white rounded">
      <h3>
        <b>Latest News</b>
      </h3>
      <hr />
      <ul class="list-unstyled">
        <li v-for="x in getData">
          <b-card no-body class="overflow-hidden mycon" style=" border:none;">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img-lazy
                  left
                  style="width:85%; "
                  :src="`${$axios.defaults.baseURL}` + x.cover"
                  :alt="x.tags[0]"
                />

                <SocialButton :x="x" />
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
import SocialButton from "~/components/partials/socialshare.vue";

export default {
  props: ["getData", "show"],
  components: {
    ListSkeleton,
    SocialButton,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  .top_left {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 15%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .mycon:hover .top_left {
    opacity: 1;
  }
}
</style>