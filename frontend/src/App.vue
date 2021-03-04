<template>
  <v-app>
    <Header />
    <v-main> </v-main>
    <v-footer>
      <Footer> </Footer>
    </v-footer>
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
