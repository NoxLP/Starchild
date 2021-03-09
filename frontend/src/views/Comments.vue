<template>
  <div>
    <Card>
      <v-row>
        <v-col>
          <v-img :src="img">
            {{ title }}
          </v-img>
        </v-col>
      </v-row>
    </Card>
    <Card>
      <template v-slot:title>
        {{ user }}
        <v-spacer></v-spacer>
        {{ date }}
      </template>

      {{ text }}

      <template v-slot:actions>
        {{ responses }}
        <v-spacer></v-spacer>
        <v-icon color="indigo">mdi-thumb-up-outline</v-icon>10
      </template>
    </Card>
    <template>
      <div class="text-end mx-2 mt-2">
        <v-btn fab dark color="indigo" elevation="10">
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
      </div>
    </template>
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
  components: { Card }
}
</script>

<style scoped></style>
