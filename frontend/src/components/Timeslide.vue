<template>
  <v-container class="mx-8" fluid fill-height>
    <!--categories carousel-->
    <v-row align="start" class="justify-start justify-sm-center categories-row">
      <v-carousel
        v-model="model"
        class="pa-4 slide"
        :continuous="false"
        hide-delimiters
        @change="categoriesOnChange"
      >
        <v-carousel-item v-for="(item, idx) in categories" :key="idx">
          <v-row align="center" justify="center">
            <v-img :src="item.img" class="slide-img">
              <v-container>
                <v-row align="center" justify="center">
                  <img :src="item.icon" class="slide-icon" />
                </v-row>
                <v-row align="center" justify="center">
                  <h1 class="white--text mt-5">{{ item.text }}</h1>
                </v-row>
              </v-container>
            </v-img>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="justify-start justify-sm-center">
      <!--timeline-->
      <v-timeline clipped :dense="timeLineDense">
        <v-timeline-item
          v-for="(item, idx) in timeLineItems"
          :key="idx"
          dark
          color="#180941"
          class="ml-0 pl-0"
        >
          <template v-slot:icon>
            <v-avatar>
              <img :src="item.categoryIcon" />
            </v-avatar>
          </template>
          <template v-slot:opposite v-if="$vuetify.breakpoint.mdAndUp">
            <span class="headline white--text">{{ item.date }}</span>
          </template>
          <v-card
            :height="timelineCardHeight(item.highlight)"
            style="width: 60vw;"
          >
            <v-img :src="item.img" v-if="$vuetify.breakpoint.smAndDown">
              <h2 class="font-weight-light mb-4 white--text">
                {{ item.date }}
              </h2>
              <span class="white--text" v-if="item.highlight"
                >{{ item.title }} {{ item.highlight }}</span
              >
            </v-img>
            <v-img :src="item.img" v-else-if="$vuetify.breakpoint.mdAndUp">
              <h2
                class="font-weight-light ml-4 mt-2 white--text"
                v-if="item.highlight"
              >
                {{ item.title }} {{ item.highlight }}
              </h2>
            </v-img>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
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
          return true
        case 'sm':
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
    timelineCardHeight: function(highlight) {
      let height, diff
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          height = 100
          diff = 80
          break
        case 'md':
        case 'lg':
        case 'xl':
        default:
          height = 150
          diff = 150
          break
      }
      return highlight ? height + diff : height
    },
    buildCategoryItems: number => {
      const items = []
      for (let i = 0; i < 5; i++) {
        items.push({
          title: `Category ${number + 1} item title ${i}`,
          date: '04/03/2021',
          img: '',
          highlight: Math.random() > 0.5 ? true : false,
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
/*timeline divider color*/
.theme--light.v-timeline:before {
  background: #e7c296;
}
.slide {
  max-width: 100vw;
}
.slide-img {
  max-width: 80vw;
}
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}

@media (min-width: 959px) {
  .slide-img {
    max-width: 60vw;
  }
}
</style>
