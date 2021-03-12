<template>
  <div class="">
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
    <Timeslide />
  </div>
</template>

<script>
import Timeslide from '../components/Timeslide.vue'

export default {
  name: 'home',
  data: () => ({
    model: null,
    events: [
      {
        name: 'all',
        date: '25-26 Marzo',
        text: 'Acuáridas',
        img: require('../../public/assets/images/categories/imgCatAll.jpg')
      },
      {
        name: 'eclipse_moon',
        date: '7 Abril',
        text: 'Eclipse de Luna',
        img: require('../../public/assets/images/categories/imgCatEclipseMoon.png')
      },
      {
        name: 'eclipse_sun',
        date: '21 Mayo',
        text: 'Eclipse de Sol',
        img: require('../../public/assets/images/categories/imgCatEclipseSun.png')
      },
      {
        name: 'planets',
        date: '4 Julio',
        text: 'Conjunción de Júpiter y Marte',
        img: require('../../public/assets/images/categories/imgCatPlanets.png')
      },
      {
        name: 'meteor_shower',
        date: '21-22 Agosto',
        text: 'Líridas',
        img: require('../../public/assets/images/categories/imgCatMeteorShower.png')
      },
      {
        name: 'comets',
        date: '30 Septiembre',
        text: 'Cometa Ison',
        img: require('../../public/assets/images/categories/imgCatComets.png'),
        icon: require('../../public/assets/images/astro_icons/SVG/8.svg')
      },
      {
        name: 'conjunction',
        date: '12 Noviembre',
        text: 'Alineamiento Júpiter - Saturno',
        img: require('../../public/assets/images/categories/imgCatConjunction.png')
      }
    ],
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
  }
}
</script>

<style scoped>
.v-carousel__controls {
  background: none !important;
}
.slide-img {
  /* width: 50vw; */
  height: 100%;
}
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
</style>
