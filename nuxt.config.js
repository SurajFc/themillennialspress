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
    title: "The Millennials Press",
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
        hid: "description",
        property: "description",
        content: "The Millennials Press - The Millennials, exploring the world of the largest living generation. We have made this website to change the way of journalism so that you all can trust us. This is just an idea to show the whole new side of our country news, and to give you a piece of our country news. We want to give you an unbiased review and impression. We believe in facts, unbiased opinions, and truth. ",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "The Millennials Press - themillennialspress.com millennials.com themillennials.com www.themillennialspress.com ",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://themillennialspress.com/"
      },
      {
        hid: "twitter:site",
        property: "twitter:site",
        content: "@millennials_90",
      },
      {
        hid: "twitter:creator",
        property: "twitter:site",
        content: "@millennials_90",
      },
      {
        property: "fb:app_id",
        content: "2061372810750186"
      },
      {
        property: "fb:pages",
        content: "104140668048667"

      }

    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "canonical",
        href: "https://themillennialspress.com/"
      },
      {
        rel: "shortlink",
        href: "https://themillennialspress.com/"
      }
    ],
    script: [{
      src: '/fb.js'
    }]
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
      'BreadcrumbPlugin',
      'JumbotronPlugin'

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
