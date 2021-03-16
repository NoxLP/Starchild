<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row justify="center" class="mt-12">
        <v-img
          class="ml-5"
          max-width="50vw"
          contain
          src="../../public/assets/images/starchild.png"
        ></v-img>
      </v-row>
    </v-container>
    <Card class="login-card">
      <v-container>
        <v-row align="center" justify="center">
          <Input
            label="Email"
            :rules="rules.email"
            type="text"
            v-model="email"
            required
          />
        </v-row>
        <v-row align="center" justify="center">
          <Input
            label="Password"
            type="password"
            :rules="rules.password"
            v-model="password"
            required
          />
        </v-row>
        <v-row align="center" justify="center">
          <Button
            text="Login"
            class="mt-10"
            :disabled="!valid"
            @click.native="validate"
          />
        </v-row>
      </v-container>
    </Card>
    <v-container>
      <v-row justify="center" class="mt-6">
        <router-link
          style="text-decoration: none; color: inherit;"
          type="button"
          class="btn"
          :to="{
            name: 'signup'
          }"
        >
          <Button text="Registro" />
        </router-link>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import LoginService from '../services/loginSignupService.js'

export default {
  name: 'login',
  components: {
    Input,
    Card,
    Button
  },
  data: () => {
    return {
      email: '',
      password: '',
      valid: true,
      rules: {
        email: [
          value =>
            (value &&
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                value
              )) ||
            'Dirección de email inválida.'
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
        LoginService.login({
          email: this.email,
          password: this.password
        })
          .then(logged => {
            if (logged) this.$router.push('home')
            else {
              //TODO -> do something to show error to user
            }
          })
          .catch(err => {
            console.log(err)
            //TODO -> do something to show error to user
          })
      }
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$router.push('home')
    }
  }
}
</script>

<style scoped>
.login-card {
  margin: 6vw 12vw 2vw 12vw !important;
  height: 36vh !important;
}
.empty-row {
  height: 20vh;
}
</style>
