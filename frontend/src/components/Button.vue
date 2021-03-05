<template>
  <div>
    <v-btn class="starchild-button">
      <p class="starchild-button-text">{{ text }}</p>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.starchild-button {
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 50px;
}
.starchild-button-text {
  font-family: Julius Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;

  color: #e7c296;
}
</style>
