<template>
  <div>
    <v-btn :class="myClass" :disabled="disabled">
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      myClass: `Glass starchild-button-text ${this.textClass}`
    }
  },
  props: {
    text: String,
    disabled: Boolean,
    textClass: {
      type: String,
      default: 'text-h5'
    }
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
.Glass {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  border-radius: 10px;
}
</style>
