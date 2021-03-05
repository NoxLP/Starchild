<template>
  <div>
    <Card class="">
      <Input label="Nombre" />
      <Input label="Apellidos" :rules="rules.surname" type="text" />
      <Input label="Usuario" />
      <Input label="Email" :rules="rules.email" type="text" />
      <Input
        label="Password"
        :rules="rules.password"
        type="password"
        name="pass"
      />
      <Input
        label="Confirmar Password"
        :rules="confirmPasswordRule"
        type="password"
        name="confirmPass"
      />
      <Input label="Ubicación" />
      <Select label="Ocupación" :rules="rules.job" type="text" />
      <Datepicker label="Fecha de Nacimiento" :rules="rules.date" type="text" />
      <Button text="Enviar" />
    </Card>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Select from '../components/Select.vue'
import Datepicker from '../components/Datepicker'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  data: () => {
    return {
      pass: '',
      confirmPassValue: '',
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
            'Mínimo 3 caracteres, una letra minúscula, una mayúscula y un número.'
        ],
        job: [],
        date: []
      }
    }
  },
  computed: {
    confirmPasswordRule() {
      return [
        () =>
          this.pass === this.confirmPassValue || 'No coincide con el password.'
      ]
    }
  },
  name: 'Signup',
  components: {
    Input,
    Select,
    Datepicker,
    Card,
    Button
  },
  mounted() {
    this.$root.$on('inputKeyUp', (name, value) => {
      if (name === 'confirmPass') {
        this.confirmPassValue = value
      } else if (name === 'pass') {
        this.pass = value
      }
    })
  }
}
</script>

<style scoped></style>
