<template>
  <v-card :maxWidth="maxWidth" class="mx-auto starchild-card">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
  props: {
    maxWidth: Number
  }
}
</script>

<style scoped>
</style>