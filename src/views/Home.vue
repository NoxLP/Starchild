<template>
  <div>
    <v-container fluid>
      <v-row justify="center" class="mb-16">
        <v-carousel
          dark
          v-model="model"
          :continuous="true"
          cycle
          vertical
          vertical-delimiters
          hide-delimiter-background
          delimiter-icon="mdi-star-four-points-outline"
          class="last-events-carousel Glass mt-15"
          height="500"
        >
          <v-carousel-item
            v-for="(item, idx) in events"
            :key="idx"
            @click="onClickOnCarouselItem(idx)"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-progress-circular
                v-show="!item.img"
                indeterminate
                color="accent"
              ></v-progress-circular>
              <v-img
                v-show="item.img"
                :src="item.img ? item.img.urls.url_hd : ''"
                class="slide-img"
              >
                <v-row align="center" justify="start">
                  <h1 class="white--text mt-5 ml-10 title-text">
                    {{ new Date(item.date).toLocaleDateString() }}
                  </h1>
                </v-row>
                <v-row align="center" justify="start">
                  <h3 class="white--text mt-5 ml-10">{{ item.text }}</h3>
                </v-row>
              </v-img>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-row>
      <v-row class="mt-16" justify="end" dense no-gutters>
        <v-col cols="6">
          <h1 class="white--text mt-16 text-sm-h3">Eventos</h1>
        </v-col>
        <v-col cols="6" class="ma-0 pa-0">
          <v-btn
            fab
            dark
            color="secondary"
            elevation="10"
            @click="expand = !expand"
            height="5vh"
            width="5vh"
            class="ma-0"
            v-for="(category, idx) in categories"
            :key="idx"
          >
            <v-img
              color="accent"
              :src="category.icon"
              height="4vh"
              width="4vh"
              contain
            ></v-img>
            <!--:width="icon_width"-->
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="start" class="timeslide-row mt-md-10">
        <Timeslide />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Timeslide from '../components/Timeslide.vue'
import homeService from '../services/homeService.js'
import { CATEGORIES } from '../helpers/categories.js'

export default {
  name: 'home',
  data: () => ({
    model: null,
    events: [],
    categories: CATEGORIES
  }),
  components: {
    Timeslide
  },
  methods: {
    onClickOnCarouselItem: function(index) {
      console.log('CLICK: ', this.events[index])
      this.$router.push({
        name: 'event',
        params: {
          eventId: this.events[index]._id,
          image: this.events[index].item.img.urls.url_hd
            ? this.events[index].item.img.urls.url_hd
            : null
        }
      })
    }
  },
  mounted() {
    homeService
      .getLastEvents()
      .then(events => {
        this.events = events

        homeService
          .getLastEventsImages(this.events)
          .then(evsWithImages => {
            this.events = evsWithImages
            console.log('Done events images: ', this.events)
          })
          .catch(err => {
            console.log('Error fetching events images', err)
          })
      })
      .catch(err => {
        console.log('Error fetching events', err)
      })
  }
}
</script>

<style scoped>
.Glass {
  /*background: rgba(255, 255, 255, 0.25);*/
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
}
.v-carousel__controls {
  background: none !important;
}
.mdi-star-four-points-outline {
  color: #e7c296 !important;
}
/*.timeslide-row {
  margin-top: 10vh;
}*/
/*.slide-img {
  height: 100%;
}*/
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
.title-text {
  text-shadow: 0px 10px 10px hsla(236, 63%, 0%, 1);
}

@media (min-width: 959px) {
  .last-events-carousel {
    margin: 0 5vw 0 5vw;
  }
}
</style>
