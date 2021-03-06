<template>
  <v-app>
    <Header />
    <v-main>
      <Input :rules="testRules" label="Ejemplo" />
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
  },
  data: () => {
    return {
      testRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 8) || 'Min 8 characters'
      ]
    }
  }
}
</script>
