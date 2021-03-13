<template>
  <div class="">
    <v-container fluid>
      <v-row justify="center">
        <v-carousel
          v-model="model"
          :continuous="true"
          cycle
          vertical
          vertical-delimiters
          hide-delimiter-background
          delimiter-icon="mdi-star-four-points-outline"
          @change="eventsOnChange"
        >
          <v-carousel-item v-for="(item, idx) in events" :key="idx">
            <v-row class="fill-height mt-5" align="center" justify="center">
              <v-img :src="item.img" class="slide-img">
                <v-row class="" align="center" justify="start">
                  <h1 class="white--text mt-5 ml-10">{{ item.date }}</h1>
                </v-row>
                <v-row class="" align="center" justify="start">
                  <h3 class="white--text mt-5 ml-10">{{ item.text }}</h3>
                </v-row>
              </v-img>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-row>
      <v-row class="mt-16" justify="center">
        <h1 class="white--text mt-16">Eventos</h1>
      </v-row>
      <v-row justify="center" align="start" class="timeslide-row mt-md-5">
        <Timeslide />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Timeslide from '../components/Timeslide.vue'
import homeService from '../services/homeService.js'

export default {
  name: 'home',
  data: () => ({
    model: null,
    events: [],
    timeItems: [
      {
        title: '',
        date: '',
        text: ''
      }
    ]
  }),
  methods: {
    eventItems: number => {
      const items = []
      for (let i = 0; i < 5; i++) {
        items.push({
          title: `Event ${number + 1} item title ${i}`,
          date: `Event ${number + 1} item date ${i}`,
          text: `Event ${number + 1} item text ${i}`
        })
      }
      return items
    },
    eventsOnChange: function(number) {
      console.log(number)
      this.timeItems = this.eventItems(number)
    }
  },
  components: {
    Timeslide
  },
  mounted() {
    homeService
      .getLastEvents()
      .then(res => {
        this.events = res
      })
      .catch(err => {
        console.log('Error fetching events', err)
      })
  }
}
</script>

<style scoped>
.v-carousel__controls {
  background: none !important;
}
/*.timeslide-row {
  margin-top: 10vh;
}*/
.slide-img {
  /* width: 50vw; */
  height: 100%;
}
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
</style>
