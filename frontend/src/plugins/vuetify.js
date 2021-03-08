import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import IconComets from '../components/icons/CatIconComets.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    catIconsComets: {
      component: IconComets
    }
  }
})
