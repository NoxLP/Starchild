<template>
  <v-container fluid>
    <v-row align="center" justify="end" :style="inputHeight">
      <v-col class="d-flex justify-end">
        <v-text-field
          outlined
          color="white"
          class="starchild-input mx-2"
          :label="label"
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
  data: function() {
    return {
      show: '',
      pwdIcon: '',
      content: '',
      inputHeight:
        this.height && this.height !== ''
          ? `height: ${this.height};`
          : 'height: 100px;'
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
      default: 'auto'
    },
    inputColumns: {
      type: String,
      default: '10'
    },
    type: String,
    height: String
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
