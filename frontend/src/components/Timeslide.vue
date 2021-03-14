<template>
  <v-container class="mx-8" fluid fill-height>
    <!--categories carousel-->
    <v-row align="start" class="justify-start justify-sm-center categories-row">
      <v-carousel
        v-model="model"
        class="pa-0 slide carousel-shadow"
        :continuous="false"
        hide-delimiters
        @change="categoriesOnChange"
      >
        <v-carousel-item
          v-for="(item, i) in categories"
          :key="i"
          :src="item.img"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-container>
            <v-row align="center" justify="center">
              <v-img :src="item.icon" class="slide-icon" height="50%" />
            </v-row>
            <v-row align="center" justify="center">
              <h1 class="white--text mt-5">{{ item.text }}</h1>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="justify-start justify-sm-center mt-5">
      <!--timeline-->
      <v-timeline clipped :dense="timeLineDense">
        <v-timeline-item
          v-for="(item, idx) in timeLineItems"
          :key="idx"
          dark
          color="hsl(255, 63%, 8%)"
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
          <Card
            class="pa-0"
            :height="timelineCardHeight(item.highlight)"
            style="width: 60vw;"
            :elevation="10"
            light
          >
            <template v-slot:pre>
              <v-container class="pt-2">
                <v-img
                  :src="item.img"
                  v-if="$vuetify.breakpoint.smAndDown"
                  :height="timelineCardHeight(item.highlight) - 17"
                  :max-height="timelineCardHeight(item.highlight) - 17"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="accent"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <h2 class="font-weight-light mb-4 white--text">
                    {{ item.date }}
                  </h2>
                  <span class="white--text" v-if="item.highlight">{{
                    item.title
                  }}</span>
                </v-img>
                <v-img
                  :src="item.img"
                  v-else-if="$vuetify.breakpoint.mdAndUp"
                  :height="timelineCardHeight(item.highlight) - 17"
                  :max-height="timelineCardHeight(item.highlight) - 17"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="accent"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <h2
                    class="font-weight-light ml-4 mt-2 white--text"
                    v-if="item.highlight"
                  >
                    {{ item.title }}
                  </h2>
                </v-img>
              </v-container>
            </template>
          </Card>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>
/*
timeLineItems: { title, date, img, highlight, categoryIcon }
*/
import { CATEGORIES, CATEGORY_ICONS } from '../helpers/categories.js'
import HomeService from '../services/homeService.js'
import EventService from '../services/eventServices.js'
import Card from '../components/Card.vue'

export default {
  data: () => ({
    model: null,
    categories: CATEGORIES,
    timeLineItems: []
  }),
  components: {
    Card
  },
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
    /*buildCategoryItems: number => {
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
    },*/
    setItemValues: async function(dto, idx) {
      console.log('timeline promise ', dto.title)
      this.timeLineItems[idx]['categoryIcon'] = CATEGORY_ICONS[dto.category]
      this.timeLineItems[idx]['highlight'] = Math.random() > 0.5 ? true : false

      let images = await EventService.getEventImage(dto._id)
      this.timeLineItems[idx]['img'] = images.urls.url_hd
    },
    categoriesOnChange: async function(number) {
      console.log('categoriesOnChange ', number)
      this.timeLineItems = []
      try {
        const categorySelected = CATEGORIES[number].name

        this.timeLineItems = await HomeService.getTimelineDTOs(
          categorySelected,
          5
        )
        console.log('timeline items done: ', this.timeLineItems)

        this.timeLineItems = await Promise.all(
          this.timeLineItems.map(async dto => {
            console.log('timeline promise ', dto.category)
            dto.date = new Date(dto.date).toLocaleDateString('es-ES')
            dto['categoryIcon'] = CATEGORIES[number].icon
            dto['highlight'] = Math.random() > 0.5 ? true : false

            let images = await EventService.getEventImage(dto._id)
            dto['img'] = images.urls.url_real
            return dto
          })
        )
        console.log('- timeline items done 2: ', this.timeLineItems)
      } catch (err) {
        console.log('error on timeslide category change: ', err)
      }
    }
  },
  mounted() {
    //this.categoriesOnChange(0)
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
/*.slide-img {
  max-width: 80vw;
}*/
.slide-icon {
  max-width: 10vw;
  color: #e7c296;
}
.Glass {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
}
.carousel-shadow {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
}

@media (min-width: 959px) {
  .slide-img {
    max-width: 60vw;
  }
}
</style>
