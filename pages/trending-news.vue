<template>
  <div>
    <DetailedView :data="data" :show="show" />
  </div>
</template>

<script>
import DetailedView from "~/components/detailed.vue";
export default {
  name: "TrendingAll",
  head() {
    return {
      title: "Trending News",
      meta: [
        {
          hid: "Trending News",
          name: "Trending News",
          content: "Trending News | The Millennials Press",
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
        const res = await this.$axios.$get(`news/trending/all?q=${this.page}`);
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
