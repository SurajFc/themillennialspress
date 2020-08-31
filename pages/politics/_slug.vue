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
  components: {
    Error,
    Article,
  },
  head() {
    return {
      title: this.data["title"],
      meta: [
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
      ],
    };
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
