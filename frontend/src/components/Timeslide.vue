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
    <v-timeline align-top clipped :dense="timeLineDense">
      <v-timeline-item
        v-for="(item, idx) in timeLineItems"
        :key="idx"
        dark
        color="#180941"
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="item.categoryIcon" />
          </v-avatar>
        </template>

        <v-card>
          <h2 class="headline font-weight-light mb-4 white--text">
            {{ item.title }}
          </h2>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
/*
timeLineItems: { title, date, img, highlight, categoryIcon }
*/
import { CATEGORIES } from '../helpers/categories.js'
//import HomeService from '../services/homeService.js'

export default {
  data: () => ({
    model: null,
    categories: CATEGORIES,
    timeLineItems: []
  }),
  computed: {
    timeLineDense() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return true
        case 'md':
        case 'lg':
        case 'xl':
        default:
          return false
      }
    },
    timeLineItemsLimit() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 4
        case 'md':
          return 6
        case 'lg':
        case 'xl':
        default:
          return 10
      }
    }
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
    categoriesOnChange: async function(number) {
      console.log(number)
      this.timeLineItems = this.buildCategoryItems(number)

      /*
      try {
        this.timeLineItems = await HomeService.getTimelineDTOs(
          CATEGORIES[number].name,
          this.timeLineItemsLimit
        )
      } catch (err) {
        console.log(err)
      }
      */
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
