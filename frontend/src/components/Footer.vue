<template>
  <v-footer dark max-width="500" class="mx-auto transparent" padless>
    <v-container class="d-none d-md-flex">
      © Starchild {{ new Date().getFullYear() }} — Todos los derechos reservados
    </v-container>
    <v-container class="d-md-none">
      <v-row>
        <v-btn icon>
          <v-icon dark color="accent" class="mx-3 black--text"
            >mdi-account</v-icon
          >
        </v-btn>

        <v-btn icon class="mx-15">
          <v-icon dark color="accent" class="mx-3 black--text">
            mdi-home
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon dark color="accent" class="mx-3 black--text"
            >mdi-power</v-icon
          >
        </v-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped></style>
