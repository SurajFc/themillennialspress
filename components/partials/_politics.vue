<template>
  <div>
    <div>
      <h3>
        <span class="font-weight-bold">Political News</span>
        <span style="float:right;">
          <b-button variant="outline-secondary">SEE ALL</b-button>
        </span>
      </h3>
      <hr />
    </div>
    <b-card-group deck>
      <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
        <ListCardSkel />
      </b-card>
      <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
        <ListCardSkel />
      </b-card>
    </b-card-group>
    <br />
    <b-card-group deck>
      <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
        <ListCardSkel />
      </b-card>
      <b-card class="overflow-hidden" style="max-width: 40rem; height:200px">
        <ListCardSkel />
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import ListCardSkel from "~/components/skeletons/_listCardSkel.vue";
export default {
  components: {
    ListCardSkel,
  },
};
</script>

<style>
</style>