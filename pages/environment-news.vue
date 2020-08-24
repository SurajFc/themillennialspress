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
        "Environment News - Latest Environment News, Breaking Environment News, Environment News Headlines | themillennialspress.com millennials",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Environment News - Latest Environment News, Breaking Environment News, World Environment Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Environment News",
          name: "Environment News",
          content: "Environment News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Environment News, Latest Environment News, Breaking Environment News, World News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Environment News - Read Breaking Environment News and Environment News Headlines. millennials is leading news website worldwide get all latest and breaking Environment news online on themillennialspress.com",
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
        const res = await this.$axios.$get(
          `news/categorynews?slug=environment`
        );
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
