<template>
  <div>
    <Card><v-img :src="img"><p>{{ title }}</p></v-img></Card>
    <Card>
        <v-container>
            <v-row>
                <v-col>
                    <span><v-img :src="cat_icon" :width="icon_width"></v-img></span>
                    <v-space>
                    <span><v-img :src="moonphase" :width="icon_width"></v-img><v-img :src="weather_icon"></v-img></span>
                    </v-space>
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
      img: require('../../public/assets/images/perseids.png'),
      title: '',
      icon_width: 30,
      cat_icon: require('../../public/assets/images/moon/waxingcrescent.png'),
      moonphase: require('../../public/assets/images/moon/fullmoon.png'),
      weather_icon: ''
    }
  },
  components: { Card }
}
</script>

<style lang="sass" scoped>

</style>
