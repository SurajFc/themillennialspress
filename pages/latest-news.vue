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
        "Latest News - Latest News, Breaking Latest News, Latest News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Latest News - Latest News, Breaking Latest News, World Latest Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Latest News",
          name: "Latest News",
          content: "Latest News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Latest News, Latest News, Breaking Latest News, World News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest News - Read Breaking Latest News and Latest News Headlines. millennials is leading news website worldwide get all latest and breaking news online on themillennialspress.com",
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
        const res = await this.$axios.$get(`news/latest`);
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
