<template>
  <v-container fluid class="pa-5 pt-1 pa-sm-16">
    <v-row class="mt-0 mt-sm-5 mx-sm-10">
      <v-col>
        <v-img max-height="17vh" :src="myEvent.img" class="card">
          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col>
                <h2 class="text-center accent--text title-text">
                  {{ myEvent.title }}
                </h2>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
    <Card>
      <v-row class="mt-0 mt-sm-5 mx-sm-10">
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
  </v-container>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  data: function() {
    return {
      img: '',
      title: '',
      user: '',
      date: '',
      text: '',
      responses: ''
    }
  },
  props: {
    myEvent: {
      type: Object,
      default() {
        return {
          img: '',
          title: 'ORIONIDAS',
          user: '',
          date: '',
          text: '',
          responses: ''
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
