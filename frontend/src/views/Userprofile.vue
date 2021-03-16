<template>
  <div>
    <Card :borders="true">
      <template v-slot:title class="card-title">
        <h5>
          {{ user }}
        </h5>
        <v-spacer></v-spacer>
        <h5>
          {{ mail }}
          {{ job }}
          {{ location }}
        </h5>
      </template>
      {{ text }}
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  data: function() {
    return {
      img: '',
      title: '',
      user: 'ERMENEGILDO GÓMEZ',
      mail: 'user@mail.com',
      job: 'estudiante',
      location: 'Santa Cruz de Tenerife',
      text: 'Pedazo de fotón que te has currado, man!! Te doy un like :D.'
    }
  },
  components: { Card }
}
</script>
<style scoped></style>
