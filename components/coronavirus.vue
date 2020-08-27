<template>
  <div class="col-lg-6 col-md-6 offset-1">
    <b-tabs content-class="mx-2 mb-2">
      <b-tab active>
        <template v-slot:title>
          <b-spinner type="grow" small></b-spinner>India
        </template>
        <Corona :data="india" v-if="show" />
        <CoronaSkel v-else />
      </b-tab>
      <b-tab>
        <template v-slot:title>
          <b-spinner type="grow" small></b-spinner>World
        </template>
        <Corona :data="world" v-if="show" />
        <CoronaSkel v-else />
      </b-tab>
      <b-tab title="Covid-19 Statistics" disabled></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Corona from "~/components/partials/_corona.vue";
import CoronaSkel from "~/components/skeletons/_coronaSkel.vue";
export default {
  components: {
    Corona,
    CoronaSkel,
  },
  data() {
    return {
      india: [],
      world: [],
      show: false,
    };
  },
  methods: {
    async getCoronaIndia() {
      try {
        const res = await this.$axios.$get(
          "https://disease.sh/v3/covid-19/countries/india"
        );

        this.india = res;
        this.show = true;
      } catch {}
    },
    getCoronaWorld() {
      this.$axios.$get("https://disease.sh/v3/covid-19/all").then((res) => {
        this.world = res;
        this.show = true;
      });
    },
  },
  created() {
    this.getCoronaIndia();
    this.getCoronaWorld();
  },
};
</script>

<style >
</style>
