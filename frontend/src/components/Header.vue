<template>
  <div>
    <v-app-bar class="d-md-none text-center" dense flat color="transparent">
      Aquí va el logo de movil
    </v-app-bar>
    <v-app-bar dark dense color="transparent" height="100px">
      <v-img
        max-width="350px"
        contain
        src="../../public/assets/images/starchild.png"
      ></v-img>

      <v-spacer></v-spacer>

      <!--<v-btn icon>
        <v-icon dark color="accent" class="mx-3">mdi-telescope</v-icon>
      </v-btn>-->
      <v-btn icon>
        <v-icon dark color="accent" class="mx-3 black--text">mdi-home</v-icon>
      </v-btn>

      <!--<v-btn icon>
        <v-icon dark color="accent" class="mx-3 black--text"
          >mdi-calendar</v-icon
        >
      </v-btn>
      |-->
      <v-btn icon>
        <v-icon dark color="accent" class="mx-3 black--text"
          >mdi-account</v-icon
        >
      </v-btn>

      <v-avatar
        class="ml-5 Glass"
        color="rgba(255, 255, 255, 0.25)"
        @click="log"
        >{{ userName.slice(0, 2) }}</v-avatar
      >
      <!--************* OJO **************
        AQUI ABAJO VA BOTON COMPONENTE-->
      <!--<Button class="ml-10" text="Logout" />-->
      <!--************* OJO **************-->
    </v-app-bar>
  </div>
</template>

<script>
//import Button from '../components/Button.vue'

export default {
  computed: {
    userName() {
      if (localStorage.getItem('user')) return localStorage.getItem('user')
      return ''
    }
  },
  components: {
    //Button
  }
}
</script>

<style scoped>
.starchild-text {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #e7c296;
}
.Glass {
  /*background: rgba(255, 255, 255, 0.1) !important;*/
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  /*border-radius: 10px;*/
}
</style>
