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
import Input from './components/Input.vue'

export default {
  components: {
    Footer,
    Header,
    Input
  }
}
</script>
