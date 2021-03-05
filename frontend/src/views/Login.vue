<template>
  <div>
    <Card class="login-card">
      <v-container>
        <v-row class="empty-row"></v-row>
        <v-row align="center" justify="center">
          <Input
            labelColumns="auto"
            inputColumns="10"
            label="Email"
            :rules="rules.email"
            type="text"
          />
        </v-row>
        <v-row align="center" justify="center">
          <Input
            labelColumns="auto"
            inputColumns="10"
            label="Password"
            :rules="rules.password"
            type="password"
          />
        </v-row>
        <v-row align="center" justify="center">
          <Button text="Login" class="mt-16" />
        </v-row>
      </v-container>
    </Card>
    <v-container>
      <v-row justify="center">
        <Button text="Registro" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  data: () => {
    return {
      rules: {
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
        ]
      }
    }
  },
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
  margin: 7vw 12vw 2vw 12vw !important;
  height: 60vh !important;
}
.empty-row {
  height: 20vh;
}
</style>
