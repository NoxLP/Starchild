<template>
  <div>
    <Card>
      <v-row>
        <v-col>
          <v-img :src="img">
            {{ title }}
          </v-img>
        </v-col>
      </v-row>
    </Card>
    <Card>
      <v-container>
        <v-row>
          <v-col>
            <div>
              {{ text }}
              <v-img :src="cat_icon" :width="icon_width"></v-img>
            </div>
            <div>
              <v-img :src="moonphase"></v-img>
              <v-img :src="weather_icon"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </Card>
    <Card>
      <v-icon>mdi-star</v-icon>
      {{ comments }}
    </Card>
  </div>
</template>

<script>
import eventServices from '../services/eventServices.js'
import Card from '../components/Card.vue'
export default {
  data: function() {
    return {
      img: require(this.image),
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
      this.comments = event.comments
      switch (event.category) {
        case 'eclipseMoon':
          this.cat_icon = require('../../public/assets/images/12-astronomy-and-space icons/SVG/10.svg')
          break
        case 'eclipseSun':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/PNGs/MoonPhases-09_Eclipse1.png')
          break
        case 'planets':
          this.cat_icon = require('../../public/assets/images/12-astronomy-and-space icons/SVG/7.svg')
          break
        case 'meteorShower':
          this.cat_icon = require('../../public/assets/images/12-astronomy-and-space icons/SVG/3.svg')
          break
        case 'comets':
          this.cat_icon = require('../../public/assets/images/12-astronomy-and-space icons/SVG/8.svg')
          break
        case 'conjunction':
          this.cat_icon = require('../../public/assets/images/12-astronomy-and-space icons/SVG/2.svg')
          break
      }
    })
    // eventServices.getEventImage(this.eventId).then(image => {
    //   this.img = image.urls.url_hd
    // })
    eventServices.getEventMoonPhase(this.eventId).then(moon => {
      switch (moon) {
        case 'New Moon':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-05_NewMoon.svg')
          break
        case 'Waxing Gibbous':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-08_WaxingGibbous.svg')
          break
        case 'Waning Gibbous':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-02_WaningBiggous.svg')
          break
        case 'Waning Crescent':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-04_WaningCrescent.svg')
          break
        case 'Waxing Crescent':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-06_WaxingCrescent.svg')
          break
        case '1st Quarter':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-07_FirstQuarter.svg')
          break
        case '3rd Quarter':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-03_ThirdQuarter.svg')
          break
        case 'Full Moon':
          this.cat_icon = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-01_FullMoon.svg')
          break
      }
    })
    console.log(this.title, this.text)
  }
}
</script>

<style lang="scss" scoped></style>
