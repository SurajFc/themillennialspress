<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="#">
        <nuxt-link to="/" exact>
          <img src="tmp.webp" alt="The Millennials Press" height="150" />
        </nuxt-link>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main">
          <b-nav-item>Trending</b-nav-item>
          <b-nav-item>India</b-nav-item>
          <b-nav-item>World</b-nav-item>
          <b-nav-item>Technology</b-nav-item>
          <b-nav-item>Politics</b-nav-item>
          <b-nav-item>Videos</b-nav-item>

          <b-nav-item-dropdown text="More" right>
            <b-dropdown-item href="#">India</b-dropdown-item>
            <b-dropdown-item href="#">Politics</b-dropdown-item>
            <b-dropdown-item href="#">World</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto social">
          <b-nav-item
            class="d-none d-lg-block"
            href="https://www.facebook.com/Themillennialspress"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'facebook-f']" style="color:#3B5998;" />
          </b-nav-item>
          <b-nav-item
            class="d-none d-lg-block"
            target="_blank"
            href="https://www.instagram.com/themillennialspress/"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" style="color:#DD2A7B " />
          </b-nav-item>
          <b-nav-item class="d-none d-lg-block">
            <font-awesome-icon :icon="['fab', 'twitter']" style="color: #1da1f2;" />
          </b-nav-item>

          <b-button size="sm" v-b-modal.modal-xl class="search_button" @click="searchNews()">
            <font-awesome-icon :icon="['fas', 'search']" style="color:
              #000;" />
          </b-button>
        </b-navbar-nav>
      </b-collapse>
      <b-modal id="modal-xl" size="xl" title="Search Anything" hide-footer lazy>
        <b-input placeholder="e.g. india"></b-input>
      </b-modal>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_icon: false,
      search: "",
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
    },
  },
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
