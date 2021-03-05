<template>
  <div>
    <Card class="">
      <Input label="Email" />
      <Input label="Password" />
      <Button text="Login" />
    </Card>
    <Button text="Registro" />
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  name: 'Login',
  components: {
    Input,
    Card,
    Button
  }
}
</script>

<style lang="scss" scoped></style>
