<template>
  <div class="mx-8">
    <v-carousel
      v-model="model"
      class="pa-4 slide"
      :continuous="false"
      hide-delimiters
      @change="categoriesOnChange"
    >
      <v-carousel-item>
        <v-card class="text-center" width="150px">
          Categoría 1
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card class="text-center" width="150px">
          Categoría 2
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card class="text-center" width="150px">
          Categoría 3
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card class="text-center" width="150px">
          Categoría 4
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <v-timeline align-top clipped dense>
      <v-timeline-item v-for="(item, idx) in timeItems" :key="idx" small>
        <!--<v-card>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>-->
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold --text`"
            v-text="item.date"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 --text`">
            {{ item.title }}
          </h2>
          <div>
            {{ item.text }}
          </div>
        </div>
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
          text: `Category ${number + 1} item text ${i}`,
          date: '04/03/2021'
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
