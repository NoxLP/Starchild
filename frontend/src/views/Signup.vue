<template>
  <div>
    <Card class="">
      <Input label="Nombre" />
      <Input label="Apellidos" />
      <Input label="Usuario" />
      <Input label="Email" />
      <Input label="Password" />
      <Input label="Conf Password" />
      <Input label="Zona" />
      <Button text="Enviar" />
    </Card>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  name: 'Signup',
  components: {
    Input,
    Card,
    Button
  }
}
</script>

<style scoped></style>
