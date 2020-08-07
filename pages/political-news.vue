<template>
  <div class="container">
    <DetailedView :data="data" :show="show" />
  </div>
</template>

<script>
import DetailedView from "~/components/detailed.vue";
export default {
  name: "PoliticalAll",
  components: {
    DetailedView,
  },
  data() {
    return {
      data: [],
      page: 1,
      show: false,
    };
  },
  methods: {
    async getTrendingAll() {
      try {
        const res = await this.$axios.$get(`news/political/all?q=${this.page}`);
        this.data = res.results;
        console.log(res);
        this.show = true;
      } catch {}
    },
  },
  mounted() {
    this.getTrendingAll();
  },
};
</script>


<style>
</style>