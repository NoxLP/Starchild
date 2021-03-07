<template>
  <v-container fluid class="xs-px-3 sm-px-7 md-px-0">
    <v-row
      align="center"
      justify="end"
      style="height: 100px"
      class="flex-nowrap"
    >
      <v-col :cols="labelColumns" v-if="outerLabel" class="d-flex justify-end">
        <p class="mb-0 p-0">{{ outerLabel }}</p>
      </v-col>
      <v-col :cols="inputColumns" md="10" lg="11" class="d-flex justify-end">
        <v-text-field
          outlined
          class="starchild-input mx-2"
          :label="innerLabel"
          :rules="rules"
          :append-icon="pwdIcon"
          :type="show"
          :value="value"
          v-model="content"
          @click:append="onShowIcon()"
          @input="onInput"
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
      content: ''
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
    value: String,
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
      default: '1'
    },
    inputColumns: {
      type: String,
      default: '12'
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
    onInput: function() {
      this.$emit('input', this.content)
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
