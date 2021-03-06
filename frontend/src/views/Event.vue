<template>
  <div>
    <Card><v-img :src="img"></v-img><p>{{ title }}</p></Card>
    <Card>
        <v-container>
            <v-row>
                <v-col>
                    <div><v-img :src="cat_icon"></v-img></div>
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
      cat_icon: '',
      moonphase: '',
      weather_icon: ''
    }
  },
  components: { Card }
}
</script>

<style lang="scss" scoped></style>
