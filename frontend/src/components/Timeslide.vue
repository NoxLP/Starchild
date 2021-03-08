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
              <h1 class="white--text mt-5">{{ item.text }}</h1>
            </v-row>
          </v-img>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-timeline align-top clipped dense>
      <v-timeline-item v-for="(item, idx) in timeItems" :key="idx" small>
        <!--<v-card>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>-->
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
        img: require('@/assets/images/categories/imgCatAll.jpg')
      },
      {
        name: 'eclipse_moon',
        text: 'Eclipses lunares',
        img: require('@/assets/images/categories/imgCatEclipseMoon.png')
      },
      {
        name: 'eclipse_sun',
        text: 'Eclipses solares',
        img: require('@/assets/images/categories/imgCatEclipseSun.png')
      },
      {
        name: 'planets',
        text: 'Planetas',
        img: require('@/assets/images/categories/imgCatPlanets.png')
      },
      {
        name: 'meteor_shower',
        text: 'Lluvia de estrellas',
        img: require('@/assets/images/categories/imgCatMeteorShower.png')
      },
      {
        name: 'comets',
        text: 'Cometas',
        img: require('@/assets/images/categories/imgCatComets.png')
      },
      {
        name: 'conjunction',
        text: 'Alineación',
        img: require('@/assets/images/categories/imgCatConjunction.png')
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
</style>
