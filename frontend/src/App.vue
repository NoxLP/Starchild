<template>
  <v-app class="app">
    <Header v-if="showHeader" />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  computed: {
    showHeader() {
      console.log('ROUTER: ', this.$router)
      return (
        this.$router.currentRoute.name !== 'login' &&
        this.$router.currentRoute.name !== 'signup'
      )
    }
  },
  components: {
    Footer,
    Header
  }
}
</script>
<style scoped>
.app {
  background-color: rgb(16, 6, 45) !important;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(11, 4, 31, 1) 40%,
    hsl(255, 63%, 8%) 75%
  ) !important;
}
</style>
