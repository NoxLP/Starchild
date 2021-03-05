<template>
  <div>
    <v-container>
      <v-row align="center" justify="center" style="height: 100px">
        <v-col cols="auto" v-show="label">
          <p class="mb-0 p-0">{{ label }}</p>
        </v-col>
        <v-col cols="auto">
          <v-text-field
            class="starchild-input mx-2"
            :label="innerLabel"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ]
  }),
  props: {
    label: String,
    innerLabel: String
  }
}
</script>

<style scoped>
.starchild-input {
  background: rgba(255, 255, 255, 0.1);
}
</style>
