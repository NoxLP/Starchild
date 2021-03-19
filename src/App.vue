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
.shooting-parent {
  transform: rotateZ(45deg);
}
.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #699bff);
  -webkit-animation: tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
  animation: tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
  transform: rotateZ(45deg);
}
.shooting_star::before {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 255, 0),
    #5f91ff,
    rgba(0, 0, 255, 0)
  );
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 255, 0),
    #5f91ff,
    rgba(0, 0, 255, 0)
  );
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
  transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(50% - 196px);
  left: calc(50% - 165px);
  /*
  -webkit-animation-delay: 6576ms;
  animation-delay: 6576ms;
  */
  -webkit-animation-delay: 6576ms;
  animation-delay: 6576ms;
}
.shooting_star:nth-child(1)::before,
.shooting_star:nth-child(1)::after {
  -webkit-animation-delay: 6576ms;
  animation-delay: 6576ms;
}
.shooting_star:nth-child(2) {
  top: calc(50% - -34px);
  left: calc(50% - 228px);
  -webkit-animation-delay: 975ms;
  animation-delay: 975ms;
}
.shooting_star:nth-child(2)::before,
.shooting_star:nth-child(2)::after {
  -webkit-animation-delay: 975ms;
  animation-delay: 975ms;
}
@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@-webkit-keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
@keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
