<template>
  <v-app>
    <Header />
    <v-main> </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Button from './components/Button.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Input from './components/Input.vue'

export default {
  components: {
    Footer,
    Header,
    Input,
    Button
  }
}
</script>
