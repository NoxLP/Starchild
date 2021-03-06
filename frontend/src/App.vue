<template>
  <v-app class="app">
    <Header />
    <v-main> <Signup /> </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Signup from './views/Signup'

export default {
  components: {
    Footer,
    Header,
    Signup
  }
}
</script>
<style scoped>
.app {
  background-color: #180941 !important;
}
</style>
