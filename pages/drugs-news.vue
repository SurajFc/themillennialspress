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
        "Drugs News - Latest Drugs News, Breaking Drugs News, Drugs News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Drugs News - Latest Drugs News, Breaking Drugs News, World Drugs Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Drugs News",
          name: "Drugs News",
          content: "Drugs News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Drugs News, Latest Drugs News, Breaking Drugs News, World News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Drugs News - Read Breaking Drugs News and Drugs News Headlines. millennials is leading news website worldwide get all latest and breaking Drugs news online on themillennialspress.com",
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
        const res = await this.$axios.$get(`news/categorynews?slug=drugs`);
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
