<template>
  <v-footer max-width="400" class="mx-auto" padless>
    <v-container class="d-none d-md-flex">
      Esto es el footer para los grandes
    </v-container>
    <v-container class="d-md-none">
      <v-row>
        <v-col cols="12">
          <v-btn icon>
            <v-icon class="mx-3 black--text mdi-account"></v-icon>
          </v-btn>
          |
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 black--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          |
          <v-btn icon>
            <v-icon class="mx-3 black--text mdi-power"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-telescope', 'mdi-home', 'mdi-calendar']
  })
}
</script>

<style scoped></style>
