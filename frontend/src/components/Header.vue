<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.smAndDown"
      class="text-center"
      flat
      color="transparent"
      height="90vh"
    >
      <v-container fluid>
        <v-row justify="center" align="center"></v-row>
        <v-img
          class="ml-5"
          max-width="300px"
          contain
          src="../../public/assets/images/starchild.png"
        ></v-img>
      </v-container>
    </v-app-bar>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndUp"
      dark
      dense
      flat
      color="transparent"
      height="100px"
    >
      <v-img
        max-width="350px"
        contain
        src="../../public/assets/images/starchild.png"
      ></v-img>

      <v-spacer></v-spacer>

      <!--<v-btn icon>
        <v-icon dark color="accent" class="mx-3">mdi-telescope</v-icon>
      </v-btn>-->
      <router-link
        style="text-decoration: none; color: inherit;"
        type="button"
        class="btn"
        :to="{
          name: 'home'
        }"
      >
        <v-btn icon>
          <v-icon dark color="accent" class="black--text">mdi-home</v-icon>
        </v-btn>
      </router-link>

      <!--<v-btn icon>
        <v-icon dark color="accent" class="mx-3 black--text"
          >mdi-calendar</v-icon
        >
      </v-btn>
      |-->
      <v-btn icon class="mx-5">
        <v-icon dark color="accent" class="black--text">mdi-account</v-icon>
      </v-btn>

      <v-btn icon @click="log" class="mx-5">
        <v-avatar
          class="ml-5 Glass starchild-text"
          color="rgba(255, 255, 255, 0.25)"
          >{{ userName.slice(0, 2) }}</v-avatar
        >
      </v-btn>
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
  /*components: {
    Button
  }*/
  methods: {
    log: function() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('email')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.starchild-text {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: white;
}
.Glass {
  /*background: rgba(255, 255, 255, 0.1) !important;*/
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  /*border-radius: 10px;*/
}
</style>
