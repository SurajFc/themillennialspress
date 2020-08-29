<template>
  <div>
    <div class="container row">
      <div class="col-lg-3 text-center">
        <p>Total</p>
        <content-loader></content-loader>
      </div>
      <div class="col-lg-3 text-center">
        <p>Active</p>
        <content-loader></content-loader>
      </div>
      <div class="col-lg-3 text-center">
        <p>Recovered</p>
        <content-loader></content-loader>
      </div>
      <div class="col-lg-2 text-center">
        <p>Deaths</p>
        <content-loader></content-loader>
      </div>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader,
  },
};
</script>

<style></style>
