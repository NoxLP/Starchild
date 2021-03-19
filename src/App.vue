<template>
  <v-app class="app">
    <div class="shooting-parent">
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
    </div>
    <Header
      v-if="
        $router.currentRoute.name !== 'login' &&
          $router.currentRoute.name !== 'signup'
      "
    />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer class="mt-16" />
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
html {
  height: 100%;
  /*background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);*/
  overflow: hidden;
}
</style>
