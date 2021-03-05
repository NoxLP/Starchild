<template>
  <v-container fluid>
    <v-row align="center" justify="end" style="height: 100px">
      <v-col :cols="labelColumns" v-show="label" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ label }}</p>
      </v-col>
      <v-col :cols="inputColumns" class="d-flex justify-end">
        <v-select
          outlined
          class="starchild-select mx-2"
          :label="innerLabel"
          :items="items"
          hide-details="auto"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Estudiante', 'Aficionado', 'Astrónomo']
  }),
  props: {
    label: String,
    innerLabel: String,
    labelColumns: String,
    inputColumns: String
  }
}
</script>

<style scoped>
.starchild-select {
  background: rgba(255, 255, 255, 0.1);
}
</style>
