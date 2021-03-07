<template>
  <v-form ref="form" v-model="valid">
    <Card class="signup-card">
      <Input label="Nombre" required />
      <Input label="Apellidos" :rules="rules.surname" type="text" />
      <Input label="Usuario" required />
      <Input label="Email" :rules="rules.email" type="text" required />
      <Input
        label="Password"
        :rules="rules.password"
        type="password"
        @inputKeyUp="onPasswordKeyUp"
        required
      />
      <ConfirmPassword
        label="Confirmar Password"
        type="password"
        :password="pass"
        required
      />
      <Input label="Ubicación" required />
      <Select label="Ocupación" :rules="rules.job" type="text" />
      <Datepicker label="Fecha de Nacimiento" :rules="rules.date" type="text" />
      <v-container class="mt-10 mb-10">
        <v-row justify="center">
          <Button text="Enviar" :disabled="!valid" @click="validate" />
        </v-row>
      </v-container>
    </Card>
  </v-form>
</template>

<script>
import Input from '../components/Input.vue'
import ConfirmPassword from '../components/ConfirmPassword.vue'
import Select from '../components/Select.vue'
import Datepicker from '../components/Datepicker.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import SignupService from '../services/SignupService.js'

export default {
  data: function() {
    return {
      pass: '',
      valid: false,
      rules: {
        surname: [],
        email: [
          value => !!value || 'Requerido.',
          value =>
            (value &&
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                value
              )) ||
            'Dirección de email válida, mínimo 3 caracteres.'
        ],
        password: [
          value => !!value || 'Requerido.',
          value =>
            (value &&
              /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}/.test(
                value
              )) ||
            'Mínimo 8 caracteres, una letra minúscula, una mayúscula y un número.'
        ],
        job: [],
        date: []
      }
    }
  },
  name: 'Signup',
  components: {
    Input,
    ConfirmPassword,
    Select,
    Datepicker,
    Card,
    Button
  },
  methods: {
    validate() {
      console.log('validate')
      this.valid = this.$refs.form.validate()

      if (this.valid) {
        SignupService.signup({})
      }
    },
    onPasswordKeyUp: function(value) {
      console.log(value + ' onPasswordKeyUp')
      this.pass = value
    }
  }
}
</script>

<style scoped>
.signup-card {
  margin: 7vw 12vw 2vw 12vw !important;
}
</style>
