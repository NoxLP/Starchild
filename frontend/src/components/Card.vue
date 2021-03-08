<template>
  <v-card max-width="400" class="pa-0 mx-auto">
    <v-container class="pa-0 class_container" fluid>
      <v-row dense>
        <v-col cols="12" class="pt-0">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
}
</script>

<style scoped>

.class_container {
  padding: 0 !important;
}

</style>
