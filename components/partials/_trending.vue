<template>
  <div>
    <div v-if="show">
      <h3>
        <b>Most Viewed</b>
      </h3>
      <hr />
      <ul class="list-unstyled">
        <li v-for="x in getData" class="mb-2">
          <b-card>
            <b-card-text>
              <b-card-img-lazy
                thumbnail
                left
                style="width:90px; height: 70px;"
                :src="`${$axios.defaults.baseURL}` + x.cover"
                :alt="x.tags[0]"
              />
              <span>{{ x.title | truncate(70) }}</span>
            </b-card-text>
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

<style>
</style>