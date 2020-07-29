import Vue from 'vue';

Vue.filter("truncate", (value, length) => {
  return value.length > length ? value.substr(0, length) + '....' : value;
});
