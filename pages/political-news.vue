<template>
  <div class="container">
    <DetailedView :data="data" :show="show" />
  </div>
</template>

<script>
import DetailedView from "~/components/detailed.vue";
export default {
  name: "PoliticalAll",
  head() {
    return {
      title: "Political News",
      meta: [
        {
          hid: "Political News",
          name: "Political News",
          content: "Political News | The Millennials Press",
        },
      ],
    };
  },
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

        this.show = true;
      } catch {}
    },
  },
  mounted() {
    this.getTrendingAll();
  },
};
</script>

<style></style>
