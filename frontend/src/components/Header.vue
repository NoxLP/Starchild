<template>
  <div>
    <v-app-bar class="d-md-none text-center" dense flat>
      Aquí va el logo de movil
    </v-app-bar>
    <v-app-bar color="d-none d-md-block align-center" dense>
      Aqui va el logo

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

<style lang="scss" scoped></style>
