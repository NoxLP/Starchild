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
      <v-container>
        <v-row>
          <v-col>
            {{ user }}
            {{ date }}
            {{ text }}
            {{ responses }}
            <v-icon>mdi-thumb-up-outline</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </Card>
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
      responses: '',
      icon_width: 30,
      cat_icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/4.svg'),
      moonphase: '',
      weather_icon: '',
      comments: 'Comentarios(14)'
    }
  },
  components: { Card }
}
</script>

<style lang="scss" scoped></style>
