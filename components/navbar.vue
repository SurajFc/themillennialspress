<template>
  <div class="container">
    <div class="d-none d-sm-block">
      <b-navbar toggelable="sm" type="light" variant="white">
        <b-navbar-brand to="/" exact>
          <img src="~/static/tmp2.webp" alt="The Millennials Press" height="50" />
        </b-navbar-brand>
        <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>

        <b-collapse is-nav>
          <b-navbar-nav class="main">
            <b-nav-item v-for="(x,index) in links" :key="index" :to="x.to">{{x.name}}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="main" style="z-index:9999">
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
              <b-form-input
                placeholder="e.g. india"
                @keyup.enter="searchNews()"
                required
                v-model="search"
              ></b-form-input>
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
    <div class="d-sm-none">
      <p>
        <nuxt-link to="/">
          <img src="~/static/tmp2.webp" alt="The Millennials Press" height="50" />
        </nuxt-link>
        <span class="float-right">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            style="color:black;background:white;"
            class="icons__btn mt-2"
            @click="openNav()"
          />
        </span>
      </p>
      <div id="myNav" ref="myNav" class="overlay" style="z-index:9999">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <b-input-group>
            <b-form-input
              placeholder="e.g. india"
              @keyup.enter="searchNews()"
              required
              v-model="search"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success" @click="searchNews()">
                <font-awesome-icon :icon="['fas', 'search']" />
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <nuxt-link v-for="x in allLinks" :key="x.name" :to="x.to">{{x.name}}</nuxt-link>
        </div>
      </div>
    </div>
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
          id: 5,
          to: "/drugs-news",
          name: "Drugs",
        },
        {
          id: 4,
          to: "/political-news",
          name: "Politics",
        },
        {
          id: 5,
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
          id: 4,
          to: "/culture-news",
          name: "Culture",
        },
        {
          id: 5,
          to: "/technology-news",
          name: "Technology",
        },
        {
          id: 3,
          to: "/environment-news",
          name: "Environment",
        },
      ],
    };
  },
  computed: {
    allLinks() {
      return [...this.links, ...this.links2];
    },
  },
  watch: {
    $route(to, from) {
      this.$refs.myNav.style.width = "0%";
    },
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
    openNav() {
      this.$refs.myNav.style.width = "100%";
    },
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
  },
};
</script>
<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 10%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 5px;
  right: 30px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 80%;
  margin-left: 10%;
}
</style>