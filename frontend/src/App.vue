<template>
  <v-app class="app">
    <Header />
    <v-main> <Login /> </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Login from './views/Login'

export default {
  components: {
    Footer,
    Header,
    Login
  }
}
</script>
<style scoped>
.app {
  background-color: #180941 !important;
}
</style>
