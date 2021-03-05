<template>
  <div>
    <Card class="">
      <Input label="Nombre" />
      <Input label="Apellidos" />
      <Input label="Usuario" />
      <Input label="Email" />
      <Input label="Password" />
      <Input label="Confirmar Password" />
      <Input label="Ubicación" />
      <Select label="Ocupación" />
      <Datepicker label="Fecha Nacimiento" />
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
  name: 'Signup',
  components: {
    Input,
    Select,
    Datepicker,
    Card,
    Button
  }
}
</script>

<style scoped></style>
