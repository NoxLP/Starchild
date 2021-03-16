<template>
  <div>
    <v-container fluid class="pa-5 pt-1 pa-sm-16">
      <!--TITULO-->
      <v-row class="mt-0 mt-sm-2 mx-sm-10">
        <v-col>
          <v-img max-height="20vh" :src="image || ''" class="card">
            <v-container fill-height>
              <v-row align="center" justify="center">
                <v-col>
                  <h2
                    v-if="$vuetify.breakpoint.smAndDown"
                    class="text-center accent--text title-text"
                  >
                    {{ event.title }}
                  </h2>
                  <h1
                    v-else
                    class="text-center accent--text text-h2 title-text"
                  >
                    {{ event.title }}
                  </h1>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <!--CUERPO-->
      <v-row class="mt-8 mx-sm-10">
        <v-col>
          <Card>
            <!--BARRA ICONOS-->
            <template v-slot:title>
              <v-row class="flex-nowrap ml-12" height="6vh">
                <v-col cols="2">
                  <v-img
                    color="accent"
                    :src="cat_icon"
                    :width="icon_width"
                    max-height="5vh"
                    height="5vh"
                  ></v-img>
                </v-col>
                <v-col cols="4" offset="6">
                  <v-img
                    color="accent"
                    :src="moonphase"
                    max-height="5vh"
                    height="5vh"
                    contain
                  ></v-img>
                  <v-img
                    color="accent"
                    :src="weather_icon"
                    max-height="5vh"
                    height="5vh"
                  ></v-img>
                </v-col>
              </v-row>
            </template>
            <!--TEXTO-->
            <div class="description text-body-1 text-sm-h5" color="white--text">
              {{ event.description }}
            </div>
            <!--FOOTER FAV Y PENCIL-->
            <template v-slot:actions v-if="$vuetify.breakpoint.mdAndUp">
              <v-row justify="center">
                <v-col cols="1">
                  <v-btn
                    fab
                    dark
                    color="secondary"
                    elevation="10"
                    @click="expand = !expand"
                    class="mb-10"
                  >
                    <v-icon color="accent">mdi-star</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1" offset="9">
                  <v-btn
                    fab
                    dark
                    color="secondary"
                    elevation="10"
                    @click="expand = !expand"
                    class="mb-10"
                  >
                    <v-icon color="accent">
                      mdi-comment
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </template>
          </Card>
        </v-col>
      </v-row>
      <!--TARJ INFERIOR MOVILES-->
      <v-row class="mt-3" v-if="$vuetify.breakpoint.smAndDown">
        <v-col>
          <v-card height="5vh" class="card">
            <v-card-text class="py-0" align="center">
              <v-container>
                <v-row align="center" justify="center" class="pa-0">
                  <v-col cols="1">
                    <v-icon color="accent">mdi-star</v-icon>
                  </v-col>
                  <v-col cols="5" cols-sm="4" offset="6" offset-sm="7">
                    <router-link
                      :to="{
                        name: 'comments',
                        params: {
                          myEvent: event
                        }
                      }"
                      class="comments-anchor"
                      href=""
                      >Comentarios({{
                        comments ? comments.length : '0'
                      }})</router-link
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--CARTA ESCRIBIR COMENTARIO DESKTOP-->
      <v-bottom-sheet v-model="expand" v-if="$vuetify.breakpoint.mdAndUp">
        <v-sheet class="bottom-background pa-10">
          <v-row>
            <v-textarea
              label="Escribe aquí tu comentario..."
              outlined
              auto-grow
              class="starchild-input"
              hide-details="auto"
              v-model="commentText"
            />
          </v-row>
          <v-row justify="end">
            <v-btn
              class="mt-3 mr-9"
              fab
              dark
              color="error"
              elevation="10"
              @click.native="cancel"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn
              class="mt-3 mr-3"
              fab
              dark
              color="blue"
              elevation="10"
              @click.native="validate"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-bottom-sheet>
      <!--COMENTARIOS EN DESKTOP-->
      <v-row class="mt-3 mr-sm-10 ml-sm-15" v-if="$vuetify.breakpoint.mdAndUp">
        <v-col>
          <Card
            textClass="pa-3 pl-5 ma-0"
            v-for="(comment, idx) in event.comments"
            :key="idx"
            :borders="true"
          >
            <template v-slot:title class="card-title">
              <h5 class="ml-5">
                {{ comment.user }}
              </h5>
              <v-spacer></v-spacer>
              <h5 class="mr-5">
                {{ new Date(comment.date).toLocaleDateString() }}
              </h5>
            </template>

            <span class="text-left">{{ comment.text }}</span>

            <template v-slot:actions>
              <span class="ml-5"
                >Respuestas: {{ comment.responses.length }}</span
              >

              <v-spacer></v-spacer>

              <v-btn
                fab
                dark
                color="secondary"
                elevation="10"
                @click="like(idx)"
                class="mr-7"
              >
                <v-icon color="accent">mdi-thumb-up-outline</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                color="secondary"
                elevation="10"
                @click="expand = !expand"
                class="mr-5"
              >
                <v-icon color="accent">
                  mdi-comment
                </v-icon>
              </v-btn>
            </template>
          </Card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import eventServices from '../services/eventServices.js'
import commentsServices from '../services/commentsService.js'
import Card from '../components/Card.vue'
import { CATEGORIES } from '../helpers/categories'

export default {
  data: function() {
    return {
      expand: false,
      event: {},
      icon_width: 30,
      cat_icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/4.svg'),
      moonphase: '',
      weather_icon: '',
      rules: [value => !!value || 'Requerido.'],
      valid: false,
      commentText: ''
    }
  },
  computed: {
    cardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return '42vh'
        default:
          return '50vh'
      }
    }
  },
  props: {
    eventId: String,
    image: String
  },
  components: { Card },
  methods: {
    confirm() {
      if (this.commentText !== '') {
        commentsServices
          .postCommentInEvent(this.commentText, this.event._id)
          .then(comment => {
            this.expand = false
            this.event.comments.push(comment)
          })
      }
    },
    cancel() {
      this.commentText = ''
      this.expand = false
    }
  },
  mounted() {
    eventServices.getEvent(this.eventId).then(event => {
      console.log(event)
      this.event = event
      this.cat_icon = CATEGORIES.find(x => x.name === event.category).icon
    })

    console.log('MOUNTED: ', this.image)
    if (!this.image) {
      eventServices.getEventImage(this.eventId).then(image => {
        this.event['img'] = require(image.urls.url_hd)
      })
    }

    eventServices.getEventMoonPhase(this.eventId).then(moon => {
      switch (moon) {
        case 'New Moon':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-05_NewMoon.svg')
          break
        case 'Waxing Gibbous':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-08_WaxingGibbous.svg')
          break
        case 'Waning Gibbous':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-02_WaningBiggous.svg')
          break
        case 'Waning Crescent':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-04_WaningCrescent.svg')
          break
        case 'Waxing Crescent':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-06_WaxingCrescent.svg')
          break
        case '1st Quarter':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-07_FirstQuarter.svg')
          break
        case '3rd Quarter':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-03_ThirdQuarter.svg')
          break
        case 'Full Moon':
          this.moonphase = require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-01_FullMoon.svg')
          break
      }
    })
  }
}
</script>

<style lang="sass" scoped></style>
<style scoped>
.card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  border-radius: 10px;

  padding: 0 !important;
}
.bottom-background {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(12.5px) !important;
}
.description {
  white-space: pre-line;
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  color: white;
  line-height: 4vh;
}
.comments-anchor {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  color: white;
}
.title-text {
  text-shadow: 0px 10px 10px hsla(236, 63%, 0%, 1);
}
.v-application .primary--text {
  color: white !important;
  /*caret-color: white !important;*/
}
.v-application .primary--text :focus {
  color: white !important;
  /*caret-color: white !important;*/
}
</style>
