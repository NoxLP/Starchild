<template>
  <v-app class="app">
    <Header />
    <v-main>
      <!-- <router-view :key="$route.fullPath" /> -->
      <Event />
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
  background-color: #180941 !important;
}
</style>
