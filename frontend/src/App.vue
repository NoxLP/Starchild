<template>
  <v-app class="app">
    <Header />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer />
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
  background-color: rgb(16, 6, 45) !important;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(11, 4, 31, 1) 40%,
    hsl(255, 63%, 8%) 75%
  ) !important;
}
</style>
