<template>
  <div class="row">
    <div class="col-lg-2 mt-2 d-none d-lg-block ">
      <h3>
        {{ $moment().format("dddd") }}
      </h3>
      <p>
        {{ $moment().format("LLL") }}<br />
        <span>GMT{{ $moment().format("Z") }}</span>
      </p>
    </div>
    <div class="col-lg-1  ">
      <b-img src="corona.png" height="100"></b-img>
    </div>
    <div class="col-lg-3  ml-4" style="margin-top:-28px;">
      <b-tabs content-class="mt-3">
        <b-tab active>
          <template v-slot:title>
            <b-spinner type="grow" small></b-spinner> India
          </template>
          <p>I'm the first tab</p></b-tab
        >
        <b-tab>
          <template v-slot:title>
            <b-spinner type="grow" small></b-spinner> World
          </template>
          <p>I'm the second tab</p></b-tab
        >
        <b-tab title="Covid-19 Statistics" disabled style="margin-left:-20px"
          ><p>I'm the second tab</p></b-tab
        >
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
