<template>
  <div class="container p-3">
    <div v-if="error">
      <Error />
    </div>
    <div v-else>
      <Article :show="show" :data="data" />
    </div>
  </div>
</template>

<script>
import Error from "~/components/error404.vue";
import Article from "~/components/article.vue";
export default {
  data() {
    return {
      data: {},
      error: false,
      show: false,
    };
  },
  head() {
    return {
      title: this.data["title"],
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Technology News - Latest Technology News, Breaking Technology News, Technology News Headlines | themillennialspress.com  millennials ",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "Technology News",
          name: "Technology News",
          content: "Technology News | The Millennials Press",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Technology News, Latest Technology News, Breaking Technology News, Technology News Headlines, millennials,  themillennials, millennialsnews, the millennials, themillennialspress.com ",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Get top and latest Technology News - Read Breaking Technology News and Technology News Headlines. millennials is leading news website worldwide get all latest and breaking world news online on themillennialspress.com",
        },
      ],
    };
  },
  components: {
    Error,
    Article,
  },
  methods: {
    getArticle() {
      var fc = this.$route.path.split("/");
      this.$axios
        .get(`/news/${fc[1]}/${fc[2]}`)
        .then((res) => {
          this.data = res.data;
          this.show = true;
        })
        .catch((e) => {
          this.error = true;
        });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
