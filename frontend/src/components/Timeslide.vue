<template>
  <div class="mx-8">
    <!--categories carousel-->
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
            <v-container>
              <v-row class="fill-height" align="center" justify="center">
                <img :src="item.icon" class="slide-icon" />
              </v-row>
              <v-row class="fill-height" align="center" justify="center">
                <h1 class="white--text mt-5">{{ item.text }}</h1>
              </v-row>
            </v-container>
          </v-img>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!--timeline-->
    <v-timeline align-top clipped dense>
      <v-timeline-item
        v-for="(item, idx) in timeItems"
        :key="idx"
        dark
        color="#180941"
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="item.categoryIcon" />
          </v-avatar>
        </template>
        <Card>
          <h2 class="headline font-weight-light mb-4 white--text">
            {{ item.title }}
          </h2>
        </Card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
/*
timeItems: { title, date, img, highlight, categoryIcon }
*/
import { CATEGORIES } from './helpers/categories.js'
import Card from '../components/Card.vue'

export default {
  data: () => ({
    model: null,
    categories: CATEGORIES,
    timeItems: [
      {
        title: '',
        text: ''
      }
    ]
  }),
  components: {
    Card
  },
  methods: {
    buildCategoryItems: number => {
      const items = []
      for (let i = 0; i < 5; i++) {
        items.push({
          title: `Category ${number + 1} item title ${i}`,
          date: '04/03/2021',
          img: '',
          highlight: false,
          categoryIcon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/8.svg')
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
.theme--light.v-timeline:before {
  background: #e7c296;
}
.v-avatar {
  border: 0 !important;
  color: transparent !important;
  background-color: transparent !important;
}
.theme--light.v-timeline .v-timeline-item__dot .v-timeline-item__inner-dot {
  color: transparent !important;
  background: red !important;
}
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
