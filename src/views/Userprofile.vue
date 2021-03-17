<template>
  <div>
    <v-container fluid class="pa-5 pt-1 pa-sm-16">
      <v-row class="mt-0 mt-sm-2 mx-sm-10">
        <v-col>
          <Card :borders="true">
            <template v-slot:title class="card-title">
              <v-row>
                <v-col>
                  <v-avatar
                    class="ml-5 Glass starchild-text"
                    color="rgba(255, 255, 255, 0.25)"
                    >{{ user.username.slice(0, 2) || user.username }}
                  </v-avatar>
                </v-col>
              </v-row>
              <h3>
                {{ user.name + ' ' + user.surname }}
              </h3>
              <v-spacer></v-spacer>
              <v-col>
                <h5>
                  <v-row>
                    {{ user.email }}
                  </v-row>
                  <v-row>
                    {{ user.job }}
                  </v-row>
                  <v-row>
                    {{ user.location }}
                  </v-row>
                </h5>
              </v-col>
            </template>
            <v-card-subtitle>
              <h4 class="accent">
                MIS EVENTOS:
              </h4>
            </v-card-subtitle>
            <v-card-text>
              {{ user.favourites }}
            </v-card-text>
          </Card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import userServices from '../services/userService.js'

export default {
  data: function() {
    return {
      user: {}
    }
  },
  components: { Card },
  mounted() {
    userServices.getUser().then(user => {
      this.user = user
    })
  }
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
