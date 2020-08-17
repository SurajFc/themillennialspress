<template>
  <div>
    <div class="row">
      <div class="col-lg-3 text-center">
        <p>Total</p>
        <h5 style="color:#FF083B;">{{ data.cases | numberFormat }}</h5>
      </div>
      <div class="col-lg-3 text-center">
        <p>Active</p>
        <h5 style="color:#1686FF;">{{ data.active | numberFormat }}</h5>
      </div>
      <div class="col-lg-3 text-center">
        <p>Recovered</p>
        <h5 style="color:#29A746;">{{ data.recovered | numberFormat }}</h5>
      </div>
      <div class="col-lg-2 text-center">
        <p>Deaths</p>
        <h5 style="color:#6D767E;">{{ data.deaths | numberFormat }}</h5>
      </div>
      <div>
        <p class="source">Source: Worldometers.info</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.source {
  margin-left: 8rem;
}
</style>
