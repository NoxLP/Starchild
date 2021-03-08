<template>
  <v-app class="app">
    <Header />
    <v-main>
      <Timeslide />
    </v-main>
    <Footer> </Footer>
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

<style scoped>
.app {
  background-color: #180941 !important;
}
</style>
