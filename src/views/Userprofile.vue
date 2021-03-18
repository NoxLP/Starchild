<template>
  <div>
    <v-container fluid class="pa-5 pt-1 pa-sm-16">
      <v-row class="mt-0 mt-sm-2 mx-sm-10">
        <v-col>
          <Card :borders="true">
            <template v-slot:title class="card-title">
              <v-row align="center" class="py-2">
                <v-col cols="1">
                  <v-avatar
                    height="15vh"
                    width="15vh"
                    class="ml-5 Glass starchild-text"
                    color="rgba(255, 255, 255, 0.25)"
                    >{{ user.username }}
                  </v-avatar>
                </v-col>
                <v-col cols="8" class="d-flex justify-start">
                  <h1 class=" ml-15">
                    {{ user.name + ' ' + user.surname }}
                  </h1>
                </v-col>
                <v-col cols="3">
                  <h3>
                    <v-row>
                      {{ user.email }}
                    </v-row>
                    <v-row>
                      {{ user.job }}
                    </v-row>
                    <v-row>
                      {{ user.location }}
                    </v-row>
                  </h3>
                </v-col>
              </v-row>
            </template>
            <v-card-subtitle>
              <v-row align="center" class="mt-10 mb-5 pr-16">
                <h1 class="accent--text">
                  MIS EVENTOS
                </h1>
                <h4 class="accent--text mb-5 ml-1">
                  ( {{ user.favourites ? user.favourites.length : 0 }} )
                </h4>
                <h1 class="accent--text ml-1">
                  :
                </h1>
              </v-row>
            </v-card-subtitle>
            <!--FAVORITOS-->
            <v-row
              class="mt-0 mt-sm-2 mx-sm-10"
              align="center"
              v-for="(fav, idx) in user.favourites"
              :key="idx"
            >
              <v-col cols="1">
                <v-btn
                  fab
                  dark
                  color="secondary"
                  elevation="10"
                  height="5vh"
                  width="5vh"
                  class="ma-0"
                >
                  <v-img
                    color="accent"
                    :src="fav.categoryIcon"
                    height="4vh"
                    width="4vh"
                    contain
                  ></v-img>
                  <!--:width="icon_width"-->
                </v-btn>
              </v-col>
              <v-col cols="10">
                <v-img
                  max-height="20vh"
                  :src="fav.img"
                  class="favourite-card"
                  @click="clickOnFavourite(idx)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0 ml-15"
                      align="center"
                      justify="start"
                    >
                      <v-progress-circular
                        indeterminate
                        color="accent"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-container fill-height>
                    <v-row align="center" justify="center">
                      <v-col>
                        <h2
                          v-if="$vuetify.breakpoint.smAndDown"
                          class="text-center accent--text title-text"
                        >
                          {{ fav.title }}
                        </h2>
                        <h1
                          v-else
                          class="text-center accent--text text-h2 title-text"
                        >
                          {{ fav.title }}
                        </h1>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-img>
              </v-col>
            </v-row>
          </Card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import userServices from '../services/userServices.js'
import eventsServices from '../services/eventServices.js'
import { getEventFromBuffer } from '../helpers/itemsBuffers'
import { CATEGORIES } from '../helpers/constObjects.js'

export default {
  data: function() {
    return {
      user: {}
    }
  },
  components: { Card },
  methods: {
    getEvent: async function(favId) {
      console.log('getEvent: ', favId)
      let event = getEventFromBuffer(favId)
      console.log('Event from buffer: ', favId, event)
      if (!event) {
        console.log('event from buffer null ', favId)
        event = await eventsServices.getEvent(favId)
      }

      if (Object.keys(event).includes('category')) {
        event['categoryIcon'] = CATEGORIES.find(
          x => x.name === event.category
        ).icon
      }

      return event
    },
    setEventImage: async function(event) {
      if (!Object.keys(event).includes('img')) {
        event['img'] = (
          await eventsServices.getEventImage(event._id)
        ).urls.url_real
      }
    },
    getEventWithImage: async function(favId) {
      console.log('getEventWithImage: ', favId)
      let event = getEventFromBuffer(favId)
      console.log('Event from buffer: ', favId, event)
      if (!event) {
        console.log('event from buffer null ', favId)
        let eventImage = await Promise.all([
          eventsServices.getEvent(favId),
          eventsServices.getEventImage(favId)
        ])

        console.log('done eventImage: ', favId, eventImage)
        event = eventImage[0]
        event['img'] = eventImage[1].urls.url_real
      }

      console.log('EVENT: ', event)
      if (Object.keys(event).includes('category')) {
        event['categoryIcon'] = CATEGORIES.find(
          x => x.name === event.category
        ).icon
      }

      return event
    },
    clickOnFavourite: function(idx) {
      this.$router.push({
        name: 'event',
        params: {
          eventId: this.user.favourites[idx]._id
        }
      })
    }
  },
  async mounted() {
    try {
      this.user = await userServices.getUser()

      this.user.favourites = await Promise.all(
        this.user.favourites.map(favId => this.getEvent(favId))
      )

      await Promise.all(
        this.user.favourites.map(fav => this.setEventImage(fav))
      )

      /*this.user.favourites = await Promise.all(
        this.user.favourites.map(async favId => this.getEventWithImage(favId))
      )*/
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
.starchild-text {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: white;
}
.Glass {
  /*background: rgba(255, 255, 255, 0.1) !important;*/
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  /*border-radius: 10px;*/
}
.favourite-card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  border-radius: 10px;
  padding: 0 !important;

  transition: opacity 0.4s ease-in-out;
  opacity: 0.5;
}
.favourite-card:hover {
  opacity: 1 !important;
  cursor: pointer;
}
</style>
