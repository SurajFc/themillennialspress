<template>
  <div class="p-3">
    <DetailedView :data="data" :show="show" />
  </div>
</template>

<script>
import DetailedView from "~/components/detailed.vue";
export default {
  name: "PoliticalAll",
  head() {
    return {
      title:
        "Political News - Latest Political News, Breaking Political News, Political News Headlines | themillennialspress.com ",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Political News - Latest Political News, Breaking Political News, Political News Headlines | themillennialspress.com ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Political News",
          name: "Political News",
          content: "Political News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Political News, Latest Political News, Breaking Political News, Political News Headlines, millennials,  themillennials, millennialsnews, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Political News - Read Breaking Political News and Political News Headlines. millennials is leading news website worldwide get all latest and breaking world news online on themillennialspress.com",
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
        const res = await this.$axios.$get(`news/categorynews?slug=politics`);
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

