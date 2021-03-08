<template>
  <div class="mx-8">
    <v-carousel
      v-model="model"
      class="pa-4 slide"
      :continuous="false"
      hide-delimiters
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
    <v-timeline align-top clipped dense>
      <v-timeline-item v-for="(item, idx) in timeItems" :key="idx" small>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold --text`"
            v-text="item.date"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 --text`">
            {{ item.title }}
          </h2>
          <div>
            {{ item.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    categories: [
      {
        name: 'all',
        text: 'Todas',
        img: require('../../public/assets/images/categories/imgCatAll.jpg')
      },
      {
        name: 'eclipse_moon',
        text: 'Eclipses lunares',
        img: require('../../public/assets/images/categories/imgCatEclipseMoon.png')
      },
      {
        name: 'eclipse_sun',
        text: 'Eclipses solares',
        img: require('../../public/assets/images/categories/imgCatEclipseSun.png')
      },
      {
        name: 'planets',
        text: 'Planetas',
        img: require('../../public/assets/images/categories/imgCatPlanets.png')
      },
      {
        name: 'meteor_shower',
        text: 'Lluvia de estrellas',
        img: require('../../public/assets/images/categories/imgCatMeteorShower.png')
      },
      {
        name: 'comets',
        text: 'Cometas',
        img: require('../../public/assets/images/categories/imgCatComets.png'),
        icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/8.svg')
      },
      {
        name: 'conjunction',
        text: 'Alineación',
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
  }
}
</script>

<style scoped>
.slide {
  max-width: 30vw;
}
.slide-img {
  max-width: 27vw;
}
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
</style>
