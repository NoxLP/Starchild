<template>
  <v-card
    :maxWidth="maxWidth"
    class="mx-auto starchild-card pa-0"
    :elevation="elevation"
    :height="height"
  >
    <slot name="pre"></slot>
    <v-card-title
      v-if="hasTitleSlot"
      :class="borders ? 'slot-border-bottom' : ''"
    >
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text :class="textClass">
      <v-container>
        <v-row fill-height dense>
          <v-col cols="12">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions
      v-if="hasActionsSlot"
      :class="borders ? 'slot-border-top' : ''"
    >
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
  props: {
    maxWidth: Number,
    borders: Boolean,
    elevation: Number,
    height: Number,
    textClass: String
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title
    },
    hasActionsSlot() {
      return !!this.$slots.actions
    }
  }
}
</script>

<style scoped>
.starchild-card {
  /*background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(10px);*/
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(12.5px) !important;
  -webkit-backdrop-filter: blur(12.5px) !important;
  border-radius: 10px !important;

  padding: 0 !important;
}
.slot-border-bottom {
  border-bottom: solid 1px #e7c296 !important;
}
.slot-border-top {
  border-top: solid 1px #e7c296 !important;
}
</style>
