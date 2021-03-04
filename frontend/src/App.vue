<template>
  <v-app>
    <Header />
    <v-main>
      <Timeslide />
    </v-main>
    <v-footer>
      <Footer> </Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Timeslide from './components/Timeslide.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header,
    Timeslide
  }
}
</script>
