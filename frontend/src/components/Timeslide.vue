<template>
  <div class="mx-8">
    <v-carousel
      v-model="model"
      class="pa-4 slide"
      :continuous="false"
      hide-delimiters
      @change="categoriesOnChange"
    >
      <v-carousel-item class="ml-15">
        <v-card>
          Categoría 1
        </v-card>
      </v-carousel-item>
      <v-carousel-item class="ml-15">
        <v-card>
          Categoría 2
        </v-card>
      </v-carousel-item>
      <v-carousel-item class="ml-15">
        <v-card>
          Categoría 3
        </v-card>
      </v-carousel-item>
      <v-carousel-item class="ml-15">
        <v-card>
          Categoría 4
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <v-timeline align-top>
      <v-timeline-item v-for="(item, idx) in timeItems" :key="idx" fill-dot>
        <v-card>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    timeItems: [
      {
        title: '',
        text: ''
      }
    ]
  }),
  methods: {
    buildCategoryItems: number => {
      const items = []
      for (let i = 0; i < 5; i++) {
        items.push({
          title: `Category ${number + 1} item title ${i}`,
          text: `Category ${number + 1} item text ${i}`
        })
      }
      return items
    },
    categoriesOnChange: function(number) {
      console.log(number)
      this.timeItems = this.buildCategoryItems(number)
    }
  }
}
</script>

<style scoped>
.slide {
  height: 250px !important;
}
</style>
