<template>
  <v-app>
    <Header />
    <v-main>
      <Input label="" innerLabel="Ejemplo" />
    </v-main>
    <v-footer>
      <Footer> </Footer>
    </v-footer>
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
