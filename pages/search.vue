<template>
  <div class="p-3">
    <h2 class="mb-3">Search Result for: {{$route.query.q}}</h2>
    <Result :data="data" :show="show" />
  </div>
</template>

<script>
import Result from "~/components/result.vue";
export default {
  head() {
    return {
      title: "Search, News | themillennialspress.com",
    };
  },
  data() {
    return {
      show: false,
      data: [],
      total: 0,
      page: 1,
    };
  },
  components: {
    Result,
  },
  methods: {
    searchQuery() {
      this.$axios.get(`news/search?q=${this.$route.query.q}`).then((res) => {
        this.data = res.data["results"];
        this.show = true;
      });
    },
  },
  mounted() {
    this.searchQuery();
  },
};
</script>

