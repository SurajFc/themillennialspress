import Vue from 'vue';

Vue.filter("numberFormat", param => {
  return Number(param).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
