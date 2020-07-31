<template>
  <div>
    <content-loader
      :width="400"
      :height="160"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="20" y="20" rx="5" ry="5" width="64" height="63" />
      <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
      <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
      <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
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