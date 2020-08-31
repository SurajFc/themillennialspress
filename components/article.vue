<template>
  <div class="row">
    <div v-if="show" class="col-md-8 col-sm-12">
      <h3>{{ data.title }}</h3>
      <br />
      <p>
        {{ $moment(data.realease).format("LLLL") }} (IST)
        <span class="float-right">
          <Social :x="data" />
        </span>
      </p>
      <br />
      <b-img-lazy
        :src="`${$axios.defaults.baseURL}` + data.cover"
        :alt="data.tags[0]"
        fluid
        style="width:100%;height:25rem;"
      />
      <br />
      <br />
      <h5>{{ data.subtitle }}</h5>
      <br />
      <div v-html="data.content"></div>
      <div class="float-right">
        Source:
        <b>{{ data.source }}</b>
      </div>
      <br />

      <Related />
    </div>

    <div v-else>
      <ArticleLoader />
    </div>

    <Latest :getData="latest" :show="show1" />
  </div>
</template>

<script>
import ArticleLoader from "~/components/skeletons/_articleSkel.vue";
import Social from "~/components/partials/socialshare.vue";
import Related from "~/components/partials/_related.vue";
import Latest from "~/components/partials/_latest.vue";
export default {
  props: ["show", "data"],
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

        {
          hid: "description",
          name: "description",
          content: this.data["title"],
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.data["title"],
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.data["title"],
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://themillennialspress.com" + this.$route.path,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://themillennialspress.com/" + this.data["cover"],
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.data["tags"],
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.data["title"],
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.data["title"],
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "https://themillennialspress.com/" + this.data["cover"],
        },
      ],
      link: [
        {
          rel: "canonical",

          href: "https://themillennialspress.com" + this.$route.path,
        },
      ],
    };
  },
  data() {
    return {
      latest: [],
      show1: false,
    };
  },
  components: {
    ArticleLoader,
    Social,
    Related,
    Latest,
  },
  methods: {
    articleCount() {
      this.$axios
        .post("news/articlecount", {
          article: this.data.id,
        })
        .then((res) => {});
    },
    async getLatest() {
      try {
        const res = await this.$axios.$get("news/getLatestnews");
        this.latest = res;
        this.show1 = true;
      } catch (err) {}
    },
  },
  beforeDestroy() {
    this.articleCount();
  },
  mounted() {
    this.getLatest();
  },
};
</script>

<style></style>
