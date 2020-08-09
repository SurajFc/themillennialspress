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
      title:
        "Trending News - Latest Trending News, Breaking Trending News, Trending News Headlines | themillennialspress.com ",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Trending News - Latest Trending News, Breaking Trending News, Trending News Headlines | themillennialspress.com ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Trending News",
          name: "Trending News",
          content: "Trending News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Trending News, Latest Trending News, Breaking Trending News, Trending News Headlines, millennials,  themillennials, millennialsnews, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Trending News - Read Breaking Trending News and Trending News Headlines. millennials is leading news website worldwide get all latest and breaking world news online on themillennialspress.com",
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
