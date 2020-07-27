<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="#">
        <img src="tmp.jpeg" alt="The Millennials Press" height="150" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main">
          <b-nav-item active>India</b-nav-item>
          <b-nav-item>World</b-nav-item>
          <b-nav-item>Business</b-nav-item>
          <b-nav-item>Technology</b-nav-item>
          <b-nav-item>World</b-nav-item>

          <b-nav-item-dropdown text="More" right>
            <b-dropdown-item href="#">India</b-dropdown-item>
            <b-dropdown-item href="#">Politics</b-dropdown-item>
            <b-dropdown-item href="#">World</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto social">
          <b-nav-text class="d-none d-lg-block">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              style="color:#3B5998;"
            />
          </b-nav-text>
          <b-nav-text class="d-none d-lg-block">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              style="color:#DD2A7B "
            />
          </b-nav-text>
          <b-nav-text class="d-none d-lg-block">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              style="color: #1da1f2;"
            />
          </b-nav-text>

          <b-button
            size="sm"
            v-b-toggle.search-collapse
            class="search_button"
            @click="searchNews()"
          >
            <font-awesome-icon
              :icon="['fas', 'search']"
              style="color:
              #000;"
            />
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-collapse
      id="search-collapse"
      class="col-lg-8 col-md-6 col-sm-12 mb-2 mx-auto"
    >
      <b-form-input v-model="search" placeholder="search"></b-form-input>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_icon: false,
      search: ""
    };
  },

  methods: {
    searchNews() {
      if (this.search_icon) {
        //search
        console.log("search");
      } else {
        this.search_icon = true;
      }
    }
  }
};
</script>
<style>
.search_button {
  outline: none;
  border: 0px;
  box-sizing: none;
  background-color: white;
  color: black;
}
</style>
