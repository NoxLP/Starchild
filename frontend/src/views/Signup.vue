<template>
  <v-form ref="form" v-model="valid">
    <Card class="signup-card md-pr-9">
      <Input label="Nombre" v-model="signData.name" required />
      <Input
        label="Apellidos"
        :rules="rules.surname"
        type="text"
        v-model="signData.surname"
      />
      <Input label="Usuario" required v-model="signData.user" />
      <Input
        label="Email"
        :rules="rules.email"
        type="text"
        v-model="signData.email"
        required
      />
      <Input
        label="Password"
        :rules="rules.password"
        type="password"
        v-model="signData.password"
        required
      />
      <ConfirmPassword
        label="Confirmar Password"
        type="password"
        v-model="confirmPassword"
        :password="signData.password"
        required
      />
      <Input label="Ubicación" required v-model="signData.location" />
      <Select
        label="Ocupación"
        :rules="rules.job"
        type="text"
        v-model="signData.job"
      />
      <Datepicker
        label="Fecha de Nacimiento"
        :rules="rules.date"
        type="text"
        v-model="signData.birthDate"
      />
      <v-container class="mt-10 mb-10">
        <v-row justify="center">
          <Button text="Enviar" :disabled="!valid" @click.native="validate" />
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
import SignupService from '../services/loginSignupService.js'

export default {
  name: 'signup',
  data: function() {
    return {
      signData: {
        name: '',
        surname: '',
        user: '',
        email: '',
        password: '',
        location: '',
        job: '',
        birthDate: ''
      },
      confirmPassword: '',
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
        SignupService.signup(this.signData)
      }
    }
  }
}
</script>

<style scoped>
.signup-card {
  margin: 7vw 15vw 2vw 15vw !important;
}
</style>
