const getAppRoutes = require("./utils/getsitemaps.js");
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */

  server: {
    port: 2000
  },

  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "The Millennials Press",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "The Millennials Press",
        name: "The Millennials Press",
        content: "The Millenials Press - The Millennials, Millennials, millennials, news, themillennialspress.com millennials.com"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://themillennialspress.com/_nuxt/img/tmp2.9d19128.webp"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "The Millennials Press - themillennialspress.com millennials.com themillennials.com www.themillennialspress.com "
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "The Millennials Press - themillennialspress.com millennials.com themillennials.com www.themillennialspress.com "
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "websites"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "millennials, Millennials, themillennials, millennials news, Millennials press ,the millennials, milenials, themillennialspress.com ",
      },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],

  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/global.css", "swiper/css/swiper.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/numberFilter.js",
    "~/plugins/truncatetext.js",
    "~/plugins/vee-validate.js",
    {
      src: "@/plugins/vue-awesome-swiper.js",
      ssr: false
    },
    {
      src: "@/plugins/youtube.js",
      ssr: false
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",

    [
      "nuxt-fontawesome",
      {
        imports: [{
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    "nuxt-moment",
    "vue-social-sharing/nuxt",
    "@nuxtjs/gtm",
    "@nuxtjs/google-adsense",
    "@nuxtjs/recaptcha",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap" //should be last
  ],

  //Tree Shaking Vue Bootstrap
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: false,
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'CardPlugin',
      'CarouselPlugin',
      'ButtonPlugin',
      'ImagePlugin',
      'ToastPlugin',
      'ModalPlugin',
      'SidebarPlugin',
      'NavbarPlugin',
      'TabsPlugin',

    ],
    directivePlugins: [],
    components: ['BIcon', 'BSpinner', 'BInputGroup', 'BInputGroupAppend']

  },


  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.siteKey,
    version: 2, // Version
    size: "normal" // Size: 'compact', 'normal', 'invisible' (v2)
  },

  //Google Tag Manager
  gtm: {
    id: process.env.gtm,
    enabled: true
  },

  //Google Adsense
  "google-adsense": {
    id: process.env.adsense
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.server_url
  },
  sitemap: {
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date()
    },
    path: "/sitemap.xml",
    gzip: true,
    hostname: "https://themillennialspress.com",

    generate: false,
    routes() {
      return getAppRoutes();
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "https://themillennialspress.com/sitemap.xml"
  }
};
