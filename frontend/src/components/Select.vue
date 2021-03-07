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
  },
  methods: {
    onInput: function() {
      this.$emit('input', this.content)
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
