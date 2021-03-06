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
.starchild-card {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}
</style>
