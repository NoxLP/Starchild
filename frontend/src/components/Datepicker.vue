<template>
  <v-container fluid>
    <v-row align="center" justify="end" style="height: 100px">
      <v-col :cols="labelColumns" v-show="label" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ label }}</p>
      </v-col>
      <v-col :cols="inputColumns" class="d-flex justify-end">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              outlined
              class="starchild-input mx-2"
              :label="innerLabel"
              hide-details="auto"
              v-model="date"
              readonly
              v-bind="attrs"
              v-on="on"
            >
              <v-icon slot="append">mdi-calendar</v-icon>
            </v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: null,
    menu: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date.toLocaleString('es-ES'))
    }
  },
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
