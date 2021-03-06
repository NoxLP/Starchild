<template>
  <div>
    <Card><v-img :src="img"></v-img><p>{{ title }}</p></Card>
    <Card>
        <v-container>
            <v-row>
                <v-col>
                    <div><v-img :src="cat_icon" :width="icon_width"></v-img></div>
                    <div><v-img :src="moonphase"></v-img><v-img :src="weather_icon"></v-img></div>
                </v-col>
            </v-row>
        </v-container>
    </Card>
    <Card />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  data: function() {
    return {
      img: '',
      title: '',
      icon_width: 30,
      cat_icon: require('../../public/assets/images/12-astronomy-and-space icons/SVG/4.svg'),
      moonphase: require(''),
      weather_icon: ''
    }
  },
  components: { Card }
}
</script>

<style lang="scss" scoped></style>
