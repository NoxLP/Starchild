<template>
  <v-app>
    <Header />
    <v-main>
      <v-card>
        <Button text="Login" />
      </v-card>
    </v-main>
    <v-footer>
      <Footer> </Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Button from './components/Button.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header,
    Button
  }
}
</script>
