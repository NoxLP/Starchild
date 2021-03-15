<template>
  <div>
    <v-container fluid class="pa-5 pt-1 pa-sm-16">
      <v-row class="mt-0 mt-sm-5 mx-sm-10">
        <v-col>
          <v-img max-height="17vh" :src="myEvent.img" class="card">
            <v-container fill-height>
              <v-row align="center" justify="center">
                <v-col>
                  <h2
                    v-if="$vuetify.breakpoint.smAndDown"
                    class="text-center accent--text title-text"
                  >
                    {{ myEvent.title }}
                  </h2>
                  <h1
                    v-else
                    class="text-center accent--text text-h2 title-text"
                  >
                    {{ myEvent.title }}
                  </h1>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row class="mt-8 mx-sm-10">
        <v-col>
          <Card
            height="42vh"
            v-for="(comment, idx) in myEvent.comments"
            :key="idx"
            :borders="true"
          >
            <template v-slot:title class="card-title">
              <h5>
                {{ comment.user }}
              </h5>
              <v-spacer></v-spacer>
              <h5>
                {{ comment.date }}
              </h5>
            </template>
            {{ comment.text }}

            <template v-slot:actions>
              {{ comment.responses.length }}
              <v-spacer></v-spacer>
              <v-icon color="primary">mdi-thumb-up-outline</v-icon>10
            </template>
          </Card>
        </v-col>
      </v-row>
      <template>
        <div class="text-end mx-2 mt-2">
          <v-btn
            fab
            dark
            color="secondary"
            elevation="10"
            @click="expand = !expand"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-expand-transition>
            <Card v-show="expand">
              <v-row>
                <v-textarea
                  label="Escribe aquí tu comentario..."
                  height="30vh"
                  outlined
                  auto-grow
                  class="starchild-input"
                  hide-details="auto"
                />
              </v-row>
              <v-row justify="end">
                <v-btn
                  class="mt-3 mr-3"
                  height="12vw"
                  width="12vw"
                  fab
                  dark
                  color="error"
                  elevation="10"
                  @click.native="cancel"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn
                  class="mt-3"
                  height="12vw"
                  width="12vw"
                  fab
                  dark
                  color="blue"
                  elevation="10"
                  @click.native="confirm"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-row>
            </Card>
          </v-expand-transition>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  data: function() {
    return {
      expand: false,
      img: '',
      title: 'ORIONIDAS',
      user: 'ERMENEGILDO GÓMEZ',
      date: '22/01/2021',
      text: 'Pedazo de fotón que te has currado, man!! Te doy un like :D.',
      responses: 'RESPUESTAS (12)'
    }
  },
  props: {
    myEvent: {
      type: Object,
      default() {
        return {
          img: '',
          title: 'ORIONIDAS',
          user: 'ERMENEGILDO GÓMEZ',
          date: '22/01/2021',
          text: 'Pedazo de fotón que te has currado, man!! Te doy un like :D.',
          responses: 'RESPUESTAS (12)'
        }
      }
    },
    image: String
  },
  components: { Card }
}
</script>
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
</style>
