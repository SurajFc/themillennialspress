<template>
  <div>
    <facebook-loader :speed="2"></facebook-loader>
    <facebook-loader :speed="2"></facebook-loader>
    <facebook-loader :speed="2"></facebook-loader>
  </div>
</template>

<script>
import { FacebookLoader } from "vue-content-loader";
export default {
  components: {
    FacebookLoader,
  },
};
</script>

<style>
</style>