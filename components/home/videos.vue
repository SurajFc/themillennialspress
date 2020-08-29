<template>
  <div class="row">
    <div class="col-md-12 col-sm-10 offset-sm-1 p-2 offset-md-0 mb-3 bg-white">
      <div>
        <h3>
          <span class="font-weight-bold">Videos</span>
          <span style="float:right;">
            <b-button class="button-prev" slot="button-prev">
              <font-awesome-icon :icon="['fas', 'chevron-circle-left']" style="color:#000000;" />
            </b-button>
            <b-button class="button-next" slot="button-next">
              <font-awesome-icon :icon="['fas', 'chevron-circle-right']" style="color:#000000;" />
            </b-button>
          </span>
        </h3>
        <hr />
      </div>

      <div v-if="show" class="p-3">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <youtube
              video-id="r_0JjYUe5jo"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="6TAPqXkZW_I"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="eJnQBXmZ7Ek"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="XbGs_qK2PQA"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="eJO5HU_7_1w"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="kXYiU_JCYtU"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="5NPBIwQyPWE"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="8xg3vE8Ie_E"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="KlyXNRrsk4A"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
          <swiper-slide>
            <youtube
              video-id="eJnQBXmZ7Ek"
              player-width="480"
              player-height="320"
              host="https://www.youtube.com"
              @ready="ready"
              @playing="playing"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      show: true,
      player: null,
      swiperOption: {
        direction: "horizontal",

        keyboard: {
          enabled: true,
        },
        mousewheel: true,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },

        breakpoints: {
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style scoped>
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
</style>
