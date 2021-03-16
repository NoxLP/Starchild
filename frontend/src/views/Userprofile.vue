<template>
  <div>
    <Card :borders="true">
      <template v-slot:title class="card-title">
        <v-row>
          <v-avatar color="grey">
            <span class="white--text headline">PP</span>
          </v-avatar>
        </v-row>
        <h3>
          {{ user }}
        </h3>
        <v-spacer></v-spacer>
        <v-col>
          <h5>
            <v-row>
              {{ mail }}
            </v-row>
            <v-row>
              {{ job }}
            </v-row>
            <v-row>
              {{ location }}
            </v-row>
          </h5>
        </v-col>
      </template>
      <h4>
        MIS EVENTOS:
      </h4>
      {{ events }}
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
      user: 'PEPITO PEREZ',
      mail: 'user@mail.com',
      job: 'aficionado',
      location: 'Las Palmas de Gran Canaria',
      events: 'Los eventos favoritos van aquí'
    }
  },
  components: { Card }
}
</script>
<style scoped></style>
