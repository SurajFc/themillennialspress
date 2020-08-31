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
          hid: "og:type",
          property: "og:type",
          content: "articles",
        },
        {
          hid: "World News",
          name: "World News",
          content: "World News | The Millennials Press",
        },
      ],
    };
  },
  components: {
    Error,
    Article,
  },
  methods: {
    async getArticle() {
      try {
        var fc = this.$route.path.split("/");
        const res = await this.$axios.get(`/news/${fc[1]}/${fc[2]}`);

        this.data = res.data;

        this.show = true;
      } catch {
        this.error = true;
      }
    },
  },
  fetch() {
    this.getArticle();
  },
};
</script>
