<template>
  <div class="container-fluid">
    <b-navbar toggleable="md" type="light" variant="white">
      <b-navbar-brand to="/" exact>
        <img src="~/static/tmp2.webp" alt="The Millennials Press" height="50" />
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-collapse" is-nav>
        <b-navbar-nav class="main">
          <b-nav-item
            v-for="(x,index) in links"
            :key="index"
            :to="x.to"
            exact-active-class
          >{{x.name}}</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="main">
          <b-nav-item-dropdown text="More" right>
            <b-dropdown-item v-for="(x,index) in links2" :key="index" :to="x.to">{{x.name}}</b-dropdown-item>
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

          <b-button size="sm" v-b-modal.searchmodal variant="white" class="search_button">
            <font-awesome-icon
              :icon="['fas', 'search']"
              style="color:
              #000;"
              class="social"
            />
          </b-button>
        </b-navbar-nav>

        <b-modal id="searchmodal" size="xl" title="Search Anything" hide-footer lazy>
          <b-input-group>
            <b-form-input placeholder="e.g. india" required v-model="search"></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-success" @click="searchNews()">
                <font-awesome-icon :icon="['fas', 'search']" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-modal>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SideBar from "~/components/partials/_sidebar.vue";
export default {
  name: "Navbar",
  components: {
    SideBar,
  },
  data() {
    return {
      search: null,
      links: [
        {
          id: 1,
          to: "/trending-news",
          name: "Trending",
        },
        {
          id: 2,
          to: "/india-news",
          name: "India",
        },
        {
          id: 3,
          to: "/world-news",
          name: "World",
        },
        {
          id: 4,
          to: "/political-news",
          name: "Politics",
        },
        {
          id: 5,
          to: "/technology-news",
          name: "Technology",
        },
        {
          id: 6,
          to: "/women",
          name: "Women",
        },
      ],
      links2: [
        {
          id: 1,
          to: "/sports-news",
          name: "Sports",
        },

        {
          id: 2,
          to: "/science-news",
          name: "Science",
        },
        {
          id: 3,
          to: "/drugs-news",
          name: "Drugs",
        },
        {
          id: 4,
          to: "/culture-news",
          name: "Culture",
        },
        {
          id: 5,
          to: "/environment-news",
          name: "Environment",
        },
      ],
    };
  },

  methods: {
    searchNews() {
      //search
      if (this.search) {
        console.log("Serach", this.search);
        this.$router.replace(`/search?q=${this.search}`);
        this.search = null;
        this.$bvModal.hide("searchmodal");
      }
    },
  },
};
</script>
<style scoped>
</style>