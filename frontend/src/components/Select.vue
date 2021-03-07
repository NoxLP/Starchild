<template>
  <v-container fluid>
    <v-row align="center" justify="end" style="height: 100px">
      <v-col :cols="labelColumns" v-show="label" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ outerLabel }}</p>
      </v-col>
      <v-col :cols="inputColumns" class="d-flex justify-end">
        <v-select
          outlined
          class="starchild-select mx-2"
          :label="innerLabel"
          :items="items"
          :value="value"
          v-model="content"
          @input="onInput"
          hide-details="auto"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Estudiante', 'Aficionado', 'Astrónomo'],
    content: ''
  }),
  props: {
    value: String,
    label: String,
    labelColumns: {
      type: String,
      default: 'auto'
    },
    inputColumns: {
      type: String,
      default: '10'
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
  },
  methods: {
    onInput: function() {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style scoped>
.starchild-select {
  background: rgba(255, 255, 255, 0.1);
}
</style>
