<template>
  <div>
    <Card class="login-card">
      <v-container>
        <v-row align="center" justify="center">
          <Input labelColumns="auto" inputColumns="10" label="Email" />
        </v-row>
        <v-row align="center" justify="center">
          <Input labelColumns="auto" inputColumns="10" label="Password" />
        </v-row>
        <v-row align="center" justify="center">
          <Button text="Login" />
        </v-row>
      </v-container>
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

<style scoped>
.login-card {
  margin: 10vw !important;
}
</style>
