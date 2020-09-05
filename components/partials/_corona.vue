<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-3 text-center">
        <p>Total</p>
        <p class="h5" style="color:#FF083B;cursor:pointer;">{{ data.cases | numberFormat }}</p>
      </div>
      <div class="col-lg-3 col-md-3 text-center">
        <p>Active</p>
        <h5 style="color:#1686FF; cursor:pointer;">{{ data.active | numberFormat }}</h5>
      </div>
      <div class="col-lg-3 col-md-3 text-center">
        <p>Recovered</p>
        <p class="h5" style="color:#29A746;cursor:pointer;">{{ data.recovered | numberFormat }}</p>
      </div>
      <div class="col-lg-2 col-md-3 text-center">
        <p>Deaths</p>
        <p class="h5" style="color:#6D767E;cursor:pointer;">{{ data.deaths | numberFormat }}</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

