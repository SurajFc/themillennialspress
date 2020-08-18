<template>
  <div>
    <div v-if="show" class="col-md-9 col-sm-12">
      <h3>{{data.title}}</h3>
      <br />
      <p>
        {{$moment(data.realease).format('LLLL')}} (IST)
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
      <h5>{{data.subtitle}}</h5>
      <br />
      <div v-html="data.content"></div>
      <br />
    </div>
    <div v-else>
      <ArticleLoader />
    </div>
  </div>
</template>

<script>
import ArticleLoader from "~/components/skeletons/_articleSkel.vue";
import Social from "~/components/partials/socialshare.vue";
export default {
  props: ["show", "data"],
  components: {
    ArticleLoader,
    Social,
  },
  methods: {
    articleCount() {
      this.$axios
        .post("news/articlecount", {
          article: this.data.id,
        })
        .then((res) => {
          console.log("response", res);
        });
    },
  },
  beforeDestroy() {
    this.articleCount();
  },
};
</script>

<style>
</style>