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
