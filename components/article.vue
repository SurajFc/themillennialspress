<template>
  <div>
    <div v-if="show" class="col-md-12 col-sm-12">
      <p class="h4">{{ data.title }}</p>
      <p class="font-italic">{{ data.subtitle }}</p>
      <br />
      <hr />
    </div>
    <div v-else>
      <ArticleLoader />
    </div>
    <div class="row">
      <div v-if="show" class="col-md-8 col-sm-12">
        <p>
          {{ $moment(data.realease).format("LLLL") }} (IST)
          <span class="float-right">
            Source:
            <b>{{ data.source }}</b>
          </span>
        </p>
        <br />
        <b-img-lazy :src="`${$axios.defaults.baseURL}` + data.cover" :alt="data.tags[0]" fluid />
        <br />
        <br />
        <p>
          <Social :x="data" />
        </p>

        <br />
        <div v-html="data.content"></div>

        <br />
        <Support />
        <Related />
      </div>
      <div v-if="show" class="col-md-4 col-sm-12">
        <LatestAll :getData="latest" :show="show1" />
      </div>
    </div>
  </div>
</template>

      
<script>
import ArticleLoader from "~/components/skeletons/_articleSkel.vue";
import Social from "~/components/partials/socialshare.vue";
import Related from "~/components/partials/_related.vue";
import LatestAll from "~/components/partials/_latestall.vue";
import Support from "~/components/partials/_support.vue";
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
    LatestAll,
    Support,
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
        const res = await this.$axios.$get("news/getLatestnews/all");
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
