<template>
  <div>
    <Card :borders="true">
      <template v-slot:title class="card-title">
        <v-row>
          <v-col>
            <v-avatar
              class="ml-5 Glass starchild-text"
              color="rgba(255, 255, 255, 0.25)"
              >{{ user.slice(0, 2) }}
            </v-avatar>
          </v-col>
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
      <v-card-subtitle>
        <h4>
          MIS EVENTOS:
        </h4>
      </v-card-subtitle>
      <v-card-text>
        {{ events }}
      </v-card-text>
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
<style scoped>
starchild-text {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: white;
}
.Glass {
  /*background: rgba(255, 255, 255, 0.1) !important;*/
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  /*border-radius: 10px;*/
}
</style>
