<template>
  <DetailedView :data="data" :show="show" />
</template>

<script>
import DetailedView from "~/components/detailed.vue";

export default {
  head() {
    return {
      title:
        "Sports News - Latest Sports News, Breaking Sports News, Sports News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Sports News - Latest Sports News, Breaking Sports News, Sports News Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Sports News",
          name: "Sports News",
          content: "Sports News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Sports News, Latest Sports News, Breaking Sports News, Sports News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Sports News - Read Breaking Sports News and Sports News Headlines. millennials is leading news website worldwide get all latest and breaking world news online on themillennialspress.com",
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
    async getAllNews() {
      try {
        const res = await this.$axios.$get(`news/categorynews?slug=sports`);
        this.data = res.results;

        this.show = true;
      } catch {}
    },
  },
  mounted() {
    this.getAllNews();
  },
};
</script>

<style>
</style>