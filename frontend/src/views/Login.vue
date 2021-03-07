<template>
  <v-form ref="form" v-model="valid">
    <Card class="login-card">
      <v-container>
        <v-row class="empty-row"></v-row>
        <v-row align="center" justify="center">
          <Input label="Email" :rules="rules.email" type="text" required />
        </v-row>
        <v-row align="center" justify="center">
          <Input
            label="Password"
            :rules="rules.password"
            type="password"
            required
          />
        </v-row>
        <v-row align="center" justify="center">
          <Button
            text="Login"
            class="mt-16"
            :disabled="!valid"
            @click.native="validate"
          />
        </v-row>
      </v-container>
    </Card>
    <v-container>
      <v-row justify="center">
        <!--<router-link
          type="button"
          class="btn"
          :to="{
            name: signup
          }"
        >-->
        <Button text="Registro" />
        <!--</router-link>-->
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import LoginService from '../services/loginService.js'

export default {
  name: 'Login',
  components: {
    Input,
    Card,
    Button
  },
  data: () => {
    return {
      pass: '',
      valid: false,
      rules: {
        email: [
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
  methods: {
    validate() {
      this.valid = this.$refs.form.validate()

      if (this.valid) {
        LoginService.login({})
      }
    }
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
