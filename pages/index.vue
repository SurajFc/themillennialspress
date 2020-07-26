<template>
  <div class="row">
    <div class="col-lg-2 mt-2 d-none d-lg-block mr-3">
      <h3>{{ $moment().format("dddd") }}</h3>
      <p>
        {{ $moment().format("LLL") }}
        <br />
        <span>GMT{{ $moment().format("Z") }}</span>
      </p>
    </div>
    <div class="col-lg-1 d-none d-lg-block">
      <b-img src="corona.png" height="100"></b-img>
    </div>
    <Coronavirus />
    <div class="col-lg-2 offset-1">
      <b-button type="button" size="lg" pill class="btn btn-danger btn-1"
        >Support</b-button
      >
    </div>
  </div>
</template>

<script>
import Coronavirus from "~/components/coronavirus.vue";

export default {
  components: {
    Coronavirus
  }
};
</script>
<style scoped>
s .btn .btn-1 {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.2) 49%,
    rgba(0, 0, 0, 0.15) 51%,
    rgba(0, 0, 0, 0.05)
  );
  background-repeat: repeat-x;
}
</style>
