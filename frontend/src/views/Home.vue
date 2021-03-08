<template>
  <div class="mx-8">
    <v-carousel
      v-model="model"
      class=""
      :continuous="true"
      cycle
      vertical
      vertical-delimiters=""
      @change="categoriesOnChange"
    >
      <v-carousel-item v-for="(item, idx) in categories" :key="idx">
        <v-row class="fill-height" align="center" justify="center">
          <v-img :src="item.img" class="slide-img">
            <v-row class="fill-height" align="center" justify="center">
              <img :src="item.icon" class="slide-icon" />
              <h1 class="white--text mt-5">{{ item.text }}</h1>
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
    categories: [
      {
        name: 'all',
        text: 'Evento 1',
        img: require('../../public/assets/images/categories/imgCatAll.jpg')
      },
      {
        name: 'eclipse_moon',
        text: 'Evento 2',
        img: require('../../public/assets/images/categories/imgCatEclipseMoon.png')
      },
      {
        name: 'eclipse_sun',
        text: 'Evento 3',
        img: require('../../public/assets/images/categories/imgCatEclipseSun.png')
      },
      {
        name: 'planets',
        text: 'Evento 4',
        img: require('../../public/assets/images/categories/imgCatPlanets.png')
      },
      {
        name: 'meteor_shower',
        text: 'Evento 5',
        img: require('../../public/assets/images/categories/imgCatMeteorShower.png')
      },
      {
        name: 'comets',
        text: 'Evento 6',
        img: require('../../public/assets/images/categories/imgCatComets.png'),
        icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/8.svg')
      },
      {
        name: 'conjunction',
        text: 'Evento 7',
        img: require('../../public/assets/images/categories/imgCatConjunction.png')
      }
    ],
    timeItems: [
      {
        title: '',
        text: ''
      }
    ]
  }),
  methods: {
    buildCategoryItems: number => {
      const items = []
      for (let i = 0; i < 5; i++) {
        items.push({
          title: `Category ${number + 1} item title ${i}`,
          text: `Category ${number + 1} item text ${i}`,
          date: '04/03/2021'
        })
      }
      return items
    },
    categoriesOnChange: function(number) {
      console.log(number)
      this.timeItems = this.buildCategoryItems(number)
    }
  },
  components: {
    Timeslide
  }
}
</script>

<style scoped>
.slide-img {
  max-width: 50vw;
}
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
</style>
