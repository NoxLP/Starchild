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
      <ConfirmPassword
        label="Confirmar Password"
        type="password"
        :password="pass"
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
import ConfirmPassword from '../components/ConfirmPassword'
import Select from '../components/Select.vue'
import Datepicker from '../components/Datepicker'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  data: function() {
    return {
      pass: '',
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
  mounted() {
    this.$root.$on('inputKeyUp', (name, value) => {
      if (name === 'pass') {
        this.pass = value
      }
    })
  }
}
</script>

<style scoped></style>
