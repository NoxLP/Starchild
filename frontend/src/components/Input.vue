<template>
  <v-container fluid>
    <v-row align="center" justify="end" style="height: 100px">
      <v-col :cols="labelColumns" v-show="label" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ outerLabel }}</p>
      </v-col>
      <v-col :cols="inputColumns" class="d-flex justify-end">
        <v-text-field
          outlined
          class="starchild-input mx-2"
          v-model="value"
          :label="innerLabel"
          :rules="rules"
          :append-icon="pwdIcon"
          :type="show"
          @click:append="onShowIcon()"
          @keyup="onInputKeyUp()"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      show: '',
      pwdIcon: '',
      value: ''
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
  props: {
    label: String,
    rules: {
      type: Array,
      default: () => [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Mínimo 3 caracteres.'
      ]
    },
    labelColumns: {
      type: String,
      default: 'auto'
    },
    inputColumns: {
      type: String,
      default: '10'
    },
    type: String
  },
  methods: {
    onShowIcon: function() {
      if (this.type && this.type === 'password') {
        if (this.show === 'text') {
          this.show = 'password'
          this.pwdIcon = 'mdi-eye'
        } else {
          this.show = 'text'
          this.pwdIcon = 'mdi-eye-off'
        }
      } else {
        this.pwdIcon = ''
      }
    },
    onInputKeyUp: function() {
      this.$emit('inputKeyUp', this.value)
    }
  },
  mounted() {
    console.log(this.type)
    this.show = this.type
    if (this.type === 'password') this.pwdIcon = 'mdi-eye'
  }
}
</script>

<style scoped>
.starchild-input {
  background: rgba(255, 255, 255, 0.1);
}
</style>
