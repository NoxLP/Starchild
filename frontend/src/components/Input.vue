<template>
  <div>
    <v-text-field
      class="starchild-input mx-2"
      :label="label"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
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
    label: String
  }
}
</script>

<style scoped>
.starchild-input {
  border: solid black 1px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
