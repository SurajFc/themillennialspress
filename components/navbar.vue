<template>
  <div class="col-md-12 col-sm-12">
    <b-navbar toggleable="sm" type="light" variant="white">
      <b-navbar-brand to="/" exact>
        <img src="~/static/tmp.webp" alt="The Millennials Press" height="150" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main">
          <b-nav-item to="/trending-news" exact-active-class>Trending</b-nav-item>
          <b-nav-item to="/india-news" exact-active-class>India</b-nav-item>
          <b-nav-item to="/world-news" exact-active-class>World</b-nav-item>
          <b-nav-item to="/political-news" exact-active-class>Politics</b-nav-item>
          <b-nav-item to="/technology-news" exact-active-class>Technology</b-nav-item>

          <b-nav-item to="/videos" exact-active-class>Videos</b-nav-item>

          <b-nav-item-dropdown text="More" right>
            <b-dropdown-item to="/sports-news" exact-active-class>Sports</b-dropdown-item>
            <b-dropdown-item to="/women" exact-active-class>Women</b-dropdown-item>
            <b-dropdown-item to="/science-news" exact-active-class>Science</b-dropdown-item>
            <b-dropdown-item to="/drugs-news" exact-active-class>Drugs</b-dropdown-item>
            <b-dropdown-item to="/culture-news" exact-active-class>Culture</b-dropdown-item>
            <b-dropdown-item to="/environment-news" exact-active-class>Environment</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto social">
          <b-nav-item
            class="d-none d-lg-block"
            href="https://www.facebook.com/Themillennialspress"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              style="color:#3B5998;"
              class="social-icon"
            />
          </b-nav-item>
          <b-nav-item
            class="d-none d-lg-block"
            target="_blank"
            href="https://www.instagram.com/themillennialspress/"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              style="color:#DD2A7B "
              class="social-icon"
            />
          </b-nav-item>
          <b-nav-item
            class="d-none d-lg-block"
            target="_blank"
            href="https://twitter.com/millennials_90"
          >
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              style="color: #1da1f2;"
              class="social-icon"
            />
          </b-nav-item>

          <b-button
            size="sm"
            v-b-modal.modal-xl
            variant="white"
            class="search_button"
            @click="searchNews()"
          >
            <font-awesome-icon
              :icon="['fas', 'search']"
              style="color:
              #000;"
              class="social"
            />
          </b-button>
        </b-navbar-nav>

        <b-modal id="modal-xl" size="xl" title="Search Anything" hide-footer lazy>
          <b-input placeholder="e.g. india"></b-input>
        </b-modal>
      </b-collapse>
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
      } else {
        this.search_icon = true;
      }
    },
  },
};
</script>
<style></style>
