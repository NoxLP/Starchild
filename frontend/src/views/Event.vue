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
            <div>
              {{ text }}
              <v-img :src="cat_icon" :width="icon_width"></v-img>
            </div>
            <div>
              <v-img :src="moonphase"></v-img>
              <v-img :src="weather_icon"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </Card>
    <Card>
      <v-icon>mdi-star</v-icon>
      {{ comments }}
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
      text:
        'Visibles durante el Otoño, durante el mes de Noviembre, las Oriónidas son el principal fenómeno celeste de la segunda mitad del año. Con el radiante en Betelgeuse, se estima una oleada de 120 meteoros a la hora. Visibles a simple vista, preferiblemente en campo abierto ó zonas deshabitadas para evitar la contaminación lumínica.',
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
