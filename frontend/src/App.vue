<template>
  <v-app class="app">
    <Header />
    <v-main> </v-main>
    <Footer> </Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.app {
  background-color: #180941 !important;
}
</style>
