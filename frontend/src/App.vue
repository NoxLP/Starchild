<template>
  <v-app class="app">
    <Header />
    <v-main><Event /></v-main>
    <Footer> </Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Event from './views/Event.vue'

export default {
  components: {
    Footer,
    Header,
    Event
  }
}
</script>
<style scoped>
.app {
  background-color: #180941 !important;
}
</style>
