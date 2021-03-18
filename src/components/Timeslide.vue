<template>
  <v-container class="mx-8" fluid fill-height>
    <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center">
      <v-col>
        <h1 class="white--text text-sm-h3 text-center">Eventos</h1>
      </v-col>
    </v-row>
    <v-row v-else class="mt-0 mx-5 pr-16 mb-8" justify="end" align="end">
      <v-col cols="12" md="7" class="ma-0 pa-0 mr-16 pr-11" align="end">
        <h1 class="white--text mt-16 text-sm-h3">Eventos</h1>
      </v-col>
      <v-col cols="4" class="ma-0 mr-5 pa-0 pr-16" align="end">
        <v-btn-toggle
          mandatory
          rounded
          v-model="model"
          :change="categoriesOnChange(model)"
        >
          <v-btn
            color="primary darken-1"
            v-for="(category, idx) in categories"
            :key="idx"
            @click="as"
          >
            <v-img
              color="accent"
              :src="category.icon"
              height="4vh"
              width="4vh"
              contain
            ></v-img>
            <!--:width="icon_width"-->
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <!--categories carousel-->
    <v-row
      align="start"
      class="justify-center justify-sm-center categories-row"
    >
      <v-col cols="10">
        <v-carousel
          v-model="model"
          class="pa-0 slide carousel-shadow image-radius"
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
            <v-container fill-height>
              <!--<v-row align="center" justify="center" class="mt-10 mb-0">
                <v-img
                  :src="item.icon"
                  class="slide-icon"
                  max-height="100%"
                  color="accent"
                  contain
                />
              </v-row>-->
              <v-row align="center" justify="center" class="mb-16 mt-0">
                <h1 class="white--text mt-5 text-sm-h1 title-text">
                  {{ item.text }}
                </h1>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-col>
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
              <img :src="item.categoryIcon" color="accent" />
            </v-avatar>
          </template>
          <template v-slot:opposite v-if="$vuetify.breakpoint.mdAndUp">
            <span class="headline white--text">{{ item.date }}</span>
          </template>
          <Card
            class="pa-0 timeline-item-card btn"
            :height="timelineCardHeight(item.highlight)"
            style="width: 60vw;"
            :elevation="10"
            light
            @click.native="onClickOnTimelineItem(idx)"
          >
            <template v-slot:pre>
              <v-container class="pt-2">
                <v-img
                  :src="item.img"
                  v-if="$vuetify.breakpoint.smAndDown"
                  :height="timelineCardHeight(item.highlight) - 17"
                  :max-height="timelineCardHeight(item.highlight) - 17"
                  class="image-radius"
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

                  <h2
                    v-if="item.highlight"
                    class="font-weight-light mb-4 white--text title-text"
                  >
                    {{ item.date }}
                  </h2>
                  <h3
                    v-else
                    class="font-weight-light mb-4 white--text title-text"
                  >
                    {{ item.date }}
                  </h3>
                  <span class="white--text title-text">{{ item.title }}</span>
                </v-img>
                <v-img
                  :src="item.img"
                  v-else-if="$vuetify.breakpoint.mdAndUp"
                  :height="timelineCardHeight(item.highlight) - 17"
                  :max-height="timelineCardHeight(item.highlight) - 17"
                  class="image-radius"
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
                    class="font-weight-light ml-4 mt-2 white--text title-text"
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
import { CATEGORIES } from '../helpers/categories.js'
import HomeService from '../services/homeService.js'
import EventService from '../services/eventServices.js'
import Card from '../components/Card.vue'

export default {
  data: function() {
    return {
      model: 0,
      categories: CATEGORIES,
      timeLineItems: [],
      timelineBuffer: JSON.parse(sessionStorage.getItem('timelineBuffer')) || {}
    }
  },
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
  mounted() {
    this.categoriesOnChange()
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
      return `${highlight ? height + diff : height}`
    },
    setCategoryItems: function(category, number, items) {
      this.timelineBuffer[category] = items
      if (number === this.model) {
        console.log('ASSIGN TO ITEMS')
        this.timeLineItems = this.timelineBuffer[category]
      }
      sessionStorage.setItem(
        'timelineBuffer',
        JSON.stringify(this.timelineBuffer)
      )
    },
    categoriesOnChange: async function() {
      console.log('categoriesOnChange ', this.model, this.timeLineItems)
      const limit = 5
      const categoryNumber = this.model
      const currentCategory = CATEGORIES[this.model].name

      if (
        !this.timelineBuffer[currentCategory] ||
        this.timelineBuffer[currentCategory].length < 5
      ) {
        console.log('*********** no session: ', this.timelineBuffer)

        try {
          const categorySelected = CATEGORIES[categoryNumber].name

          const items = await HomeService.getTimelineDTOs(
            categorySelected,
            limit
          )
          this.setCategoryItems(currentCategory, categoryNumber, items)

          console.log(
            'timeline items done: ',
            this.timelineBuffer[currentCategory],
            this.timeLineItems
          )

          this.setCategoryItems(
            currentCategory,
            categoryNumber,
            await Promise.all(
              this.timelineBuffer[currentCategory].map(async dto => {
                console.log('timeline promise ', dto.category)

                dto.date = new Date(dto.date).toLocaleDateString('es-ES')
                dto['categoryIcon'] = CATEGORIES[categoryNumber].icon
                dto['highlight'] = Math.random() > 0.5 ? true : false

                let images = await EventService.getEventImage(dto._id)
                dto['img'] = images.urls.url_real
                return dto
              })
            )
          )

          console.log('- timeline items done 2: ', this.timeLineItems)
        } catch (err) {
          console.log('error on timeslide category change: ', err)
        }
      } else {
        console.log('****** found session')
        this.timeLineItems = this.timelineBuffer[currentCategory]
      }
    },
    onClickOnTimelineItem: function(index) {
      console.log('CLICK: ', this.timeLineItems[index])
      this.$router.push({
        name: 'event',
        params: {
          eventId: this.timeLineItems[index]._id
        }
      })
    }
  }
}
</script>

<style scoped>
/*timeline divider color*/
.theme--dark.v-timeline:before {
  background: #e7c296;
}
.slide {
  max-width: 100vw;
  border-radius: 50px !important;
}
.slide-img {
  max-width: 80vw;
}
.slide-icon {
  max-width: 15vw;
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
.image-radius {
  border-radius: 10px;
}
.title-text {
  text-shadow: 0px 10px 10px hsla(236, 63%, 0%, 1);
}

@media (min-width: 959px) {
  .slide-img {
    max-width: 60vw;
  }
  .timeline-item-card {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.7;
  }
  .timeline-item-card:hover {
    opacity: 1 !important;
    cursor: pointer;
  }
}
</style>
