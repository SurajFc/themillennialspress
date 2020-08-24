<template>
  <div class="p-3">
    <DetailedView :data="data" :show="show" />
  </div>
</template>

<script>
import DetailedView from "~/components/detailed.vue";

export default {
  head() {
    return {
      title:
        "Culture News - Latest Culture News, Breaking Culture News, Culture News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Culture News - Latest Culture News, Breaking Culture News, World Culture Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Culture News",
          name: "Culture News",
          content: "Culture News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Culture News, Latest Culture News, Breaking Culture News, World News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Culture News - Read Breaking Culture News and Culture News Headlines. millennials is leading news website worldwide get all latest and breaking Culture news online on themillennialspress.com",
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
        const res = await this.$axios.$get(`news/categorynews?slug=culture`);
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
