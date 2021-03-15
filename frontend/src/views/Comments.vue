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
              <v-icon color="indigo">mdi-thumb-up-outline</v-icon>10
            </template>
          </Card>
        </v-col>
      </v-row>

      <!--<Card :borders="true">
        <template v-slot:title class="card-title">
          <h5>
            {{ user }}
          </h5>
          <v-spacer></v-spacer>
          <h5>
            {{ date }}
          </h5>
        </template>
        {{ text }}

        <template v-slot:actions>
          {{ responses }}
          <v-spacer></v-spacer>
          <v-icon color="indigo">mdi-thumb-up-outline</v-icon>10
        </template>
      </Card>-->
      <template>
        <div class="text-end mx-2 mt-2">
          <v-btn fab dark color="indigo" elevation="10">
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
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
      img: '',
      title: 'ORIONIDAS',
      user: 'ERMENEGILDO GÓMEZ',
      date: '22/01/2021',
      text: 'Pedazo de fotón que te has currado, man!! Te doy un like :D.',
      responses: 'RESPUESTAS (12)'
    }
  },
  props: {
    myEvent: Object,
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
