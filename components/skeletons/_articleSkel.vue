<template>
  <div>
    <content-loader :height="100"></content-loader>
    <br />
    <content-loader
      :width="400"
      :height="200"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="50" y="20" rx="5" ry="5" width="400" height="12" />
      <rect x="50" y="40" rx="5" ry="5" width="400" height="12" />
      <rect x="50" y="60" rx="5" ry="5" width="400" height="12" />
      <rect x="0" y="80" rx="5" ry="5" width="400" height="12" />
      <rect x="0" y="95" rx="5" ry="5" width="642" height="12" />
      <rect x="0" y="110" rx="5" ry="5" width="642" height="12" />
      <rect x="0" y="125" rx="5" ry="5" width="642" height="12" />
      <rect x="0" y="140" rx="5" ry="5" width="642" height="12" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: { ContentLoader },
};
</script>

<style>
</style>