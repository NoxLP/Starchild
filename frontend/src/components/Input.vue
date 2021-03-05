<template>
  <v-container fluid>
    <v-row align="center" justify="end" style="height: 100px">
      <v-col :cols="labelColumns" v-show="label" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ label }}</p>
      </v-col>
      <v-col :cols="inputColumns" class="d-flex justify-end">
        <v-text-field
          class="starchild-input mx-2"
          :label="innerLabel"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ]
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
.starchild-input {
  background: rgba(255, 255, 255, 0.1);
}
</style>
