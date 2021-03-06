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

      <v-btn icon>
        <v-icon class="mx-3 black--text">mdi-telescope</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="mx-3 black--text">mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class="mx-3 black--text">mdi-calendar</v-icon>
      </v-btn>
      |
      <v-btn icon>
        <v-icon class="mx-3 black--text">mdi-account</v-icon>
      </v-btn>

      Username
      <!--************* OJO **************
        AQUI ABAJO VA BOTON COMPONENTE-->
      <v-btn class="ml-10">Logout</v-btn>
      <!--************* OJO **************-->
    </v-app-bar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
