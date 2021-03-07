<template>
  <v-container fluid class="xs-px-3 sm-px-7 md-px-0">
    <v-row
      align="center"
      justify="end"
      style="height: 100px"
      class="flex_nowrap"
    >
      <v-col :cols="labelColumns" v-if="outerLabel" class="d-flex justify-end">
        <p class="mb-0 p-0 text-truncate label">{{ outerLabel }}</p>
      </v-col>
      <v-col :cols="inputColumns" md="10" lg="11" class="d-flex justify-end">
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
              :value="value"
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
      this.$emit('input', this.date)
    }
  },
  props: {
    value: String,
    label: String,
    labelColumns: {
      type: String,
      default: '1'
    },
    inputColumns: {
      type: String,
      default: '12'
    }
  },
  computed: {
    innerLabel() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return this.label
        /*case 'md':
        case 'lg':
        case 'xl':*/
        default:
          return ''
      }
    },
    outerLabel() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return ''
        /*case 'md':
        case 'lg':
        case 'xl':*/
        default:
          return this.label
      }
    }
  }
}
</script>

<style scoped>
.label {
  max-width: 100px !important;
}
.starchild-select {
  background: rgba(255, 255, 255, 0.1);
}
</style>
