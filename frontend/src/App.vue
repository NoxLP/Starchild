<template>
  <v-app>
    <Header />
    <v-main> </v-main>
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
