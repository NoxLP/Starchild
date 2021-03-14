import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#180941',
        secondary: '#3e2f5a',
        accent: '#e7c296',
        error: '#ff0000',
        success: '#00ff66',
        text: '#ffffff'
      }
    }
  }
})

export default vuetify
