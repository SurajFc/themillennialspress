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
        "World News - Latest World News, Breaking World News, World News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "World News - Latest World News, Breaking World News, World News Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "World News",
          name: "World News",
          content: "World News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "World News, Latest World News, Breaking World News, World News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest World News - Read Breaking World News and World News Headlines. millennials is leading news website worldwide get all latest and breaking world news online on themillennialspress.com",
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
        const res = await this.$axios.$get(`news/categorynews?slug=world`);
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