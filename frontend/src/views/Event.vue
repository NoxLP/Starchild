<template>
  <div>
    <v-container fluid class="pa-5 pt-1 pa-sm-16">
      <v-row class="mt-0 mt-sm-5 mx-sm-10">
        <v-col>
          <v-img max-height="17vh" :src="img" class="card">
            <v-container fill-height>
              <v-row align="center" justify="center">
                <v-col>
                  <h2
                    v-if="$vuetify.breakpoint.smAndDown"
                    class="text-center accent--text title-text"
                  >
                    {{ title }}
                  </h2>
                  <h1
                    v-else
                    class="text-center accent--text text-h2 title-text"
                  >
                    {{ title }}
                  </h1>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row class="mt-8 mx-sm-10">
        <v-col>
          <Card height="42vh">
            <template v-slot:title>
              <v-row class="flex-nowrap" height="6vh">
                <v-col cols="2">
                  <v-img
                    color="accent"
                    :src="cat_icon"
                    :width="icon_width"
                    max-height="5vh"
                    height="5vh"
                  ></v-img>
                </v-col>
                <v-col cols="4" offset="6">
                  <v-img
                    color="accent"
                    :src="moonphase"
                    max-height="5vh"
                    height="5vh"
                    contain
                  ></v-img>
                  <v-img
                    color="accent"
                    :src="weather_icon"
                    max-height="5vh"
                    height="5vh"
                  ></v-img>
                </v-col>
              </v-row>
            </template>
            <span
              class="description text-body-1 text-sm-h5"
              color="white--text"
              >{{ text }}</span
            >
          </Card>
        </v-col>
      </v-row>
      <v-row class="mt-3" v-if="$vuetify.breakpoint.smAndDown">
        <v-col>
          <v-card height="5vh" class="card">
            <v-card-text class="py-0" align="center">
              <v-container>
                <v-row align="center" justify="center" class="pa-0">
                  <v-col cols="1">
                    <v-icon color="accent">mdi-star</v-icon>
                  </v-col>
                  <v-col cols="5" cols-sm="4" offset="6" offset-sm="7">
                    <a class="comments-anchor" href=""
                      >Comentarios({{ comments ? comments.length : '0' }})</a
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import eventServices from '../services/eventServices.js'
import Card from '../components/Card.vue'
import { CATEGORIES } from '../helpers/categories'

export default {
  data: function() {
    return {
      img: this.image ? this.image : '',
      title: '',
      text: '',
      icon_width: 30,
      cat_icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/4.svg'),
      moonphase: '',
      weather_icon: '',
      comments: ''
    }
  },
  props: {
    eventId: String,
    image: String
  },
  components: { Card },
  mounted() {
    eventServices.getEvent(this.eventId).then(event => {
      this.title = event.title
      this.text = event.description
      console.log(this.text)
      this.comments = event.comments
      this.cat_icon = CATEGORIES.find(x => x.name === event.category).icon
    })

    if (!this.image) {
      eventServices.getEventImage(this.eventId).then(image => {
        this.img = require(image.urls.url_hd)
      })
    }

    eventServices.getEventMoonPhase(this.eventId).then(moon => {
      switch (moon) {
        case 'New Moon':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-05_NewMoon.svg')
          break
        case 'Waxing Gibbous':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-08_WaxingGibbous.svg')
          break
        case 'Waning Gibbous':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-02_WaningBiggous.svg')
          break
        case 'Waning Crescent':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-04_WaningCrescent.svg')
          break
        case 'Waxing Crescent':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-06_WaxingCrescent.svg')
          break
        case '1st Quarter':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-07_FirstQuarter.svg')
          break
        case '3rd Quarter':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-03_ThirdQuarter.svg')
          break
        case 'Full Moon':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-01_FullMoon.svg')
          break
      }
    })
    console.log(this.title, this.text)
  }
}
</script>

<style scoped>
.card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  border-radius: 10px;

  padding: 0 !important;
}
.description {
  white-space: pre-line;
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  color: white;
  line-height: 4vh;
}
.comments-anchor {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;

  color: white;
}
.title-text {
  text-shadow: 0px 10px 10px hsla(236, 63%, 0%, 1);
}
</style>
