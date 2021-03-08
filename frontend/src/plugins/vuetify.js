import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import IconComets from '../../public/assets/images/12-astronomy-and-space icons/SVG/8.svg'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      catIconsComets: {
        // name of our custom icon
        component: IconComets // our custom component
      }
    }
  }
})
